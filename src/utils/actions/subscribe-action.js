// ──────────────────────────────────────────────────────────────
// src/actions/subscribe-actions.js
// Server-side actions for subscription workflow
// ──────────────────────────────────────────────────────────────
'use server';

import {
  subscribe,
  confirmSubscription,
  getSubscriberData,
  updateSubscriberDetails
} from '@/utils/blog/notion-service';

import {
  sendSubscribeConfirmationEmail,
  sendSubscribeAdminNotification
} from '@/utils/libraries/mailing/nodemailer';
import { headers } from 'next/headers';


// Helper to build the public origin (https://example.com)
function getOrigin() {
  const env = process.env.NEXT_PUBLIC_PROT_URL_BASE || "https://www.reasonofhope.com";
  if (env) return env.replace(/\/$/, '');
  const host = headers().get('host') ?? 'localhost:3000';
  const proto = host.startsWith('localhost') ? 'http' : 'https';
  return `${proto}://${host}`;
}

/*──────────────────────────────────────────────────────────────
  1️⃣  Initial “Subscribe” form action  (useFormState)
──────────────────────────────────────────────────────────────*/
export async function subscribeAction(prevState, formData) {
  // prevState ignored – required by useFormState signature
  const email = formData.get('email')?.toString().trim().toLowerCase();

  if (!email || !/^[\w.+-]+@\w+\.\w{2,}$/.test(email)) {
    return { ok: false, error: 'البريد إلكتروني غير صالح' };
  }

  try {
    // 1. add Pending subscriber → returns JWT token
    const { token } = await subscribe({ email });

    // 2. build confirmation URL
    const origin = getOrigin();
    const confirmLink = `${origin}/actions?token=${token}&action=confirmSub`;

    // 3. e-mail user
    await sendSubscribeConfirmationEmail(email, { confirmLink });

    return { ok: true };
  } catch (err) {
    
    return { ok: false, error: err.message };
  }
}

/*──────────────────────────────────────────────────────────────
  2️⃣  Called from /actions after the user clicks confirm link
──────────────────────────────────────────────────────────────*/
export async function confirmSubscriptionAction(token) {
  // verify token & flip Pending→Active
  const { pageId } = await confirmSubscription(token);


  // return data for profile-completion redirect
  const data = await getSubscriberData(token);
  // notify admin (optional)
  await sendSubscribeAdminNotification(data.email);
  return data;
}

/*──────────────────────────────────────────────────────────────
  3️⃣  “Complete profile” form action (name + phone)
──────────────────────────────────────────────────────────────*/
export async function makeSaveSubscriberDetailsAction(token) {
  return async function saveSubscriberDetails(prev, formData) {
    'use server';
    const name = formData.get('name')?.toString() ?? '';
    const phone = formData.get('phone')?.toString() ?? '';

    try {
      await updateSubscriberDetails(token, { name, phone });
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  };
}
