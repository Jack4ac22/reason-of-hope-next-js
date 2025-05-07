import { Client } from '@notionhq/client';
import { cache } from 'react';

export const revalidate = 3600; // revalidate the data at most every hour

const databaseId = process.env.NOTION_DATABASE_ID;

/**
 * Returns a random integer between the specified values, inclusive.
 * The value is no lower than `min`, and is less than or equal to `max`.
 *
 * @param {number} minimum - The smallest integer value that can be returned, inclusive.
 * @param {number} maximum - The largest integer value that can be returned, inclusive.
 * @returns {number} - A random integer between `min` and `max`, inclusive.
 */
function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @type {import('@notionhq/client').Client}
 * @description Notion client instance
 */
const notion = new Client({
  auth: process.env.NOTION_WRITE_TOKEN,
});

export const getDatabase = cache(async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
});

export const getPage = cache(async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

export const getPageFromSlug = cache(async (slug) => {
  try {

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Slug',
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    if (response?.results?.length) {
      return response?.results?.[0];
    }
  } catch (error) {
    console.error('[Notion] Failed to get page from slug:', error.message);
  }
  return null;
});

export const getBlocks = cache(async (blockID) => {
  const blockId = blockID?.replaceAll('-', '');
  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  // Fetches all child blocks recursively
  // be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return Promise.all(childBlocks).then((blocks) => blocks.reduce((acc, curr) => {
    if (curr.type === 'bulleted_list_item') {
      if (acc[acc.length - 1]?.type === 'bulleted_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: getRandomInt(10 ** 99, 10 ** 100).toString(),
          type: 'bulleted_list',
          bulleted_list: { children: [curr] },
        });
      }
    } else if (curr.type === 'numbered_list_item') {
      if (acc[acc.length - 1]?.type === 'numbered_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: getRandomInt(10 ** 99, 10 ** 100).toString(),
          type: 'numbered_list',
          numbered_list: { children: [curr] },
        });
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []));
});



//  //////////  //
///// GETERS ///// 
//  //////////  //

export const getTags = cache(async () => {
  let startCursor = undefined;
  let allResults = [];

  do {
    const { results, nextCursor, hasMore } = await queryDatabasePaginated(process.env.NOTION_TAGS_DATABASE_ID, { startCursor });
    nextCursor ? startCursor = nextCursor : startCursor = null;
    allResults = [...allResults, ...results];
    startCursor = nextCursor;
  } while (startCursor);

  return allResults;
});


export const getCategories = cache(async () => {
  let startCursor = undefined;
  let allResults = [];

  do {
    const { results, nextCursor, hasMore } = await queryDatabasePaginated(process.env.NOTION_CATEGORIES_DATABASE_ID, { startCursor });
    nextCursor ? startCursor = nextCursor : startCursor = null;
    allResults = [...allResults, ...results];
    startCursor = nextCursor;
  } while (startCursor);

  return allResults;
});


export const getContributersList = cache(async () => {
  let startCursor = undefined;
  let allResults = [];

  do {
    const { results, nextCursor, hasMore } = await queryDatabasePaginated(process.env.NOTION_CONTRIBUTERS_DATABASE_ID, { startCursor });
    nextCursor ? startCursor = nextCursor : startCursor = null;
    allResults = [...allResults, ...results];
    startCursor = nextCursor;
  } while (startCursor);

  return allResults;
});

export const getFallaciesList = cache(async () => {
  let startCursor = undefined;
  let allResults = [];

  do {
    const { results, nextCursor, hasMore } = await queryDatabasePaginated(process.env.NOTION_FALLACIES_DATABASE_ID, { startCursor });
    nextCursor ? startCursor = nextCursor : startCursor = null;
    allResults = [...allResults, ...results];
    startCursor = nextCursor;
  } while (startCursor);

  return allResults;
});



/////////////////////////
////////////////////////
///////////////////////

/**
 * Query a Notion database with optional filters, sorts, and pagination support.
 *
 * @param {string} databaseId - The Notion database ID
 * @param {object} options
 * @param {object} [options.filter] - Optional Notion filter
 * @param {object[]} [options.sorts] - Optional sort rules
 * @param {string} [options.startCursor] - For pagination
 * @param {number} [options.pageSize] - Number of results per page (max 100)
 * @returns {Promise<{ results: any[], nextCursor: string | null, hasMore: boolean }>}
 * @example const { results, nextCursor, hasMore } = await queryDatabasePaginated('your-database-id', {
 *   filter: {
 *     property: 'status',
 *     select: {
  *       equals: 'published',
  *     },
  *   },
  *   sorts: [
  *     {
  *       property: 'date',
  *       direction: 'descending',
  *     },
  *   ],
  *  startCursor: 'your-start-cursor',
  * pageSize: 50,
  * });
  * 
  ]
 }
 }
 */
export async function queryDatabasePaginated(databaseId, {
  filter,
  sorts,
  startCursor,
  pageSize = 100
} = {}) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      ...(filter && { filter }),
      ...(sorts && { sorts }),
      ...(startCursor && { start_cursor: startCursor })
    });

    return {
      results: response.results,
      nextCursor: response.next_cursor,
      hasMore: response.has_more
    };
  } catch (error) {
    console.error('[Notion] Failed to query database:', error.message);
    throw error;
  }
}