/**
 * Unified Notion helper for:
 *   • Subscribers  (Pending → Active → Cancelled)
 *   • Contact messages
 *   • Spam filtering (keywords / domains / emails)
 *
 * 100 % server-only — do NOT import in client components.
 */
'use server';

if (typeof window !== 'undefined') {
  throw new Error('notion-service.js must never run in the browser');
}

import { Client } from '@notionhq/client';
import { makeJWT, readJWT } from '../libraries/security/jwt';

// ────────────────────────────────────────────────────────────
// 1. Notion clients (read / write)
// ────────────────────────────────────────────────────────────
const read = new Client({ auth: process.env.NOTION_READ_TOKEN });
const write = new Client({ auth: process.env.NOTION_WRITE_TOKEN });

// DB IDs
const DB_SUB = process.env.NOTION_SUBSCRIBERS_DATABASE_ID;
const DB_CONT = process.env.NOTION_CONTACTS_DATABASE_ID;
const DB_SPAM = process.env.NOTION_SPAM_FILTER_DATABASE_ID;

const LAST_UPDATE_PROP = 'Last Update';


// ────────────────────────────────────────────────────────────
// 2. Tiny retry wrapper for Notion rate-limits (3 req/s)
// ────────────────────────────────────────────────────────────
async function retry(fn, attempts = 3) {
  try {
    return await fn();
  } catch (err) {
    if (attempts > 0 && (err.status === 429 || err.code === 'rate_limited')) {
      await new Promise(r => setTimeout(r, 800));
      return retry(fn, attempts - 1);
    }
    throw err;
  }
}

// ────────────────────────────────────────────────────────────
// 3. Spam-filter cache (5 min)
// ────────────────────────────────────────────────────────────
let spamCache = { ts: 0, keywords: [], domains: [], emails: [] };

export async function loadSpam() {
  const now = Date.now();
  if (now < spamCache.ts + 5 * 60_000) return spamCache;

  const res = await retry(() =>
    read.databases.query({
      database_id: DB_SPAM,
      filter: {
        and: [
          { property: 'Active', checkbox: { equals: true } }
        ]
      }
    })
  );

  const kw = [];
  const dom = [];
  const eml = [];

  res.results.forEach(p => {
    const type = p.properties.Type.select?.name;
    if (!type) return;
    const value = p.properties['Blocked Item'].title[0]?.plain_text || '';
    if (!value) return;
    if (type === 'Keyword') kw.push(value.toLowerCase());
    if (type === 'Domain') dom.push(value.toLowerCase());
    if (type === 'Email Address') eml.push(value.toLowerCase());
  });

  spamCache = { ts: now, keywords: kw, domains: dom, emails: eml };
  return spamCache;
}

export async function isSpam({ email, message }) {
  const { keywords, domains, emails } = await loadSpam();
  const domain = (email.split('@')[1] || '').toLowerCase();
  const msg = (message || '').toLowerCase();

  if (emails.includes(email.toLowerCase())) return true;
  if (domains.includes(domain)) return true;
  if (keywords.some(k => msg.includes(k))) return true;
  return false;
}

// ────────────────────────────────────────────────────────────
// 4.  Duplicate check (≤5 min)
// ────────────────────────────────────────────────────────────
export async function hasRecentMessage(email) {
  const fiveMinAgo = new Date(Date.now() - 5 * 60_000).toISOString();
  const res = await retry(() =>
    read.databases.query({
      database_id: DB_CONT,
      filter: {
        and: [
          { property: 'Email Address', email: { equals: email } },
          { property: 'Date Received', date: { after: fiveMinAgo } }
        ]
      },
      page_size: 1
    })
  );
  return res.results.length > 0;
}

// ────────────────────────────────────────────────────────────
// 5. Subscribers
// ────────────────────────────────────────────────────────────
function lastUpdatePatch(now) {
  return { [LAST_UPDATE_PROP]: { date: { start: now } } };
}

export async function subscriberExists(email) {
  const res = await retry(() =>
    read.databases.query({
      database_id: DB_SUB,
      filter: {
        and: [
          { property: 'Email', email: { equals: email } },
          {
            property: 'Subscription Status',
            status: { does_not_equal: 'Cancelled' }
          }
        ]
      },
      page_size: 1
    })
  );
  return res.results.length > 0;
}

export async function subscribe({ email, phone = 'no phone', name = 'no name' }) {
  if (await subscriberExists(email)) throw new Error('Subscriber already exists');


  const page = await retry(() =>
    write.pages.create({
      parent: { database_id: DB_SUB },
      properties: {
        Name: { title: [{ text: { content: name || email } }] },
        Email: { email },
        Phone: { phone_number: phone },
        'Subscription Status': { status: { name: 'Pending' } },
        'Join Date': { date: null },
        'Last Update': { date: { start: new Date().toISOString() } },
      }
    })
  );
  const pageId = page.id;
  const token = await makeJWT({ email, act: 'confirmSub', pageId });

  return { token };
}

export async function confirmSubscription(token) {
  const { email } = await readJWT(token);

  // find pending record by email
  const res = await retry(() =>
    read.databases.query({
      database_id: DB_SUB,
      filter: {
        and: [
          { property: 'Email', email: { equals: email } },
          { property: 'Subscription Status', status: { equals: 'Pending' } }
        ]
      }
    })
  );

  if (res.results.length === 0) throw new Error(code="ERR_SUBSCRIBER_NOT_FOUND",'No pending subscriber');

  const pageId = res.results[0].id;
  const now = new Date().toISOString();

  await retry(() =>
    write.pages.update({
      page_id: pageId,
      properties: {
        'Subscription Status': { status: { name: 'Active' } },
        'Join Date': { date: { start: now } },
        'Last Update': { date: { start: new Date().toISOString() } },
      }
    })
  );

  return { pageId };
}

export async function unsubscribe(email) {
  const res = await retry(() =>
    read.databases.query({
      database_id: DB_SUB,
      filter: { property: 'Email', email: { equals: email } }
    })
  );

  if (res.results.length === 0) throw new Error('Subscriber not found');

  const pageId = res.results[0].id;
  const now = new Date().toISOString();

  await retry(() =>
    write.pages.update({
      page_id: pageId,
      properties: {
        'Subscription Status': { status: { name: 'Cancelled' } },
        CancellationDate: { date: { start: now } },
        'Last Update': { date: { start: new Date().toISOString() } },
      }
    })
  );

  return { pageId };
}

// ────────────────────────────────────────────────────────────
// 6. Contact messages
// ────────────────────────────────────────────────────────────
export async function logContact({ name, email, message, priority = 'Low' }) {
  const now = new Date().toISOString();
  const page = await retry(() =>
    write.pages.create({
      parent: { database_id: DB_CONT },
      properties: {
        'Message Title': { title: [{ text: { content: message.slice(0, 50) } }] },
        'Sender Name': { rich_text: [{ text: { content: name } }] },
        'Email Address': { email },
        'Message Content': { rich_text: [{ text: { content: message } }] },
        Priority: { select: { name: priority } },
        Status: { status: { name: 'New' } },
        'Date Received': { date: { start: now } },
        'Sent to Client': { checkbox: true },
        'Sent to Company': { checkbox: false },
        'Last Update': { date: { start: new Date().toISOString() } },
      }
    })
  );
  return { pageId: page.id };
}

/**  returns { confirmToken, cancelToken }  */
export async function generateContactTokens(email, pageId) {
  const base = { email, pageId };
  return {
    confirmToken: await makeJWT({ ...base, act: 'confirmMsg' }, '3d'),
    cancelToken: await makeJWT({ ...base, act: 'cancelMsg' }, '3d')
  };
}

/**
 * Safely handle confirm / cancel link.
 *   urlAction should be 'confirm' or 'cancel'.
 *   Throws on mismatched action or if canceling an already-confirmed message.
 */
export async function confirmContactAction(token, urlAction) {
  const { email, pageId, act } = await readJWT(token);

  if ((act === 'confirmMsg' && urlAction !== 'confirm') ||
    (act === 'cancelMsg' && urlAction !== 'cancel')) {
    throw new Error('Action mismatch');
  }

  const page = await retry(() => read.pages.retrieve({ page_id: pageId }));
  const update = props =>
    retry(() => write.pages.update({ page_id: pageId, properties: props }));

  if (urlAction === 'confirm') {
    const already = page.properties['Sent to Company'].checkbox;
    if (already) return { alreadyConfirmed: true };

    await update({
      'Sent to Company': { checkbox: true },
      Status: { status: { name: 'Responded' } },
      'Last Update': { date: { start: new Date().toISOString() } },
    });
    return { confirmed: true };
  }

  if (urlAction === 'cancel') {
    const already = page.properties['Sent to Company'].checkbox;
    if (already) throw new Error('Message already confirmed; cannot cancel.');

    await update({
      Status: { status: { name: 'Archived' } },
      'Last Update': { date: { start: new Date().toISOString() } },
    });
    return { cancelled: true };
  }

  throw new Error('Unknown action');
}

export async function updateContactStatus(pageId, newStatus) {
  await retry(() =>
    write.pages.update({
      page_id: pageId,
      properties: { Status: { status: { name: newStatus } } }
    })
  );
}

// fetch minimal subscriber data by token
export async function getSubscriberData(token) {
  const { email, pageId, act } = await readJWT(token);
  if (act !== 'confirmSub') throw new Error('Invalid token');
  const page = await retry(() => read.pages.retrieve({ page_id: pageId }));
  return {
    pageId,
    email,
    name: page.properties.Name.title[0]?.plain_text || '',
    phone: page.properties.Phone.phone_number || ''
  };
}

export async function updateSubscriberDetails(token, { name, phone }) {
  const { pageId, act } = await readJWT(token);
  if (act !== 'confirmSub') throw new Error('Invalid token');

  await retry(() =>
    write.pages.update({
      page_id: pageId,
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Phone: phone
          ? { phone_number: phone }
          : { phone_number: null },
        'Last Update': { date: { start: new Date().toISOString() } },
      }
    })
  );
}
