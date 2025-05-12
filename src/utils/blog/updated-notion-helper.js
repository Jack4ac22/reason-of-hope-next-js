import { v4 as uuid } from 'uuid';
import { Client } from '@notionhq/client';


/**
 * @type {import('@notionhq/client').Client}
 * @description Notion client instance
 */
const write_notion = new Client({
  auth: process.env.NOTION_WRITE_TOKEN || "NOTION_KEY",
});
const read_notion = new Client({
  auth: process.env.NOTION_READ_TOKEN || "NOTION_KEY",
});

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
    const response = await read_notion.databases.query({
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



/**
 * Retrieves all pages from the specified Notion database by handling pagination under the hood.
 *
 * This function will:
 *   1. Query the database using `queryDatabasePaginated`, handling up to `pageSize` items per request.
 *   2. Automatically retry each page fetch once on failure before throwing.
 *   3. Continue fetching subsequent pages until there are no more `nextCursor` tokens.
 *   4. Accumulate and return the complete list of page objects.
 *
 * @async
 * @function getAllPages
 * @param {string} databaseId - The Notion database ID to query.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of Notion page objects.
 *
 * @example
 * // Fetch all pages from the "Articles" database
 * const pages = await getAllPages(process.env.NOTION_ARTICLES_DATABASE_ID);
 * console.log(`Fetched ${pages.length} pages`);
 *
 * @throws {Error} If any Notion API request fails after a retry.
 */
export async function getAllPages(databaseId) {
  let startCursor = undefined;
  const all = [];

  try {
    do {
      let attempt = 0;
      let pageResult;
      // Retry logic: attempt up to 2 times
      while (attempt < 2) {
        try {
          pageResult = await queryDatabasePaginated(databaseId, { startCursor });
          break;
        } catch (err) {
          attempt++;
          console.warn(
            `Query attempt ${attempt} failed for database ${databaseId}`,
            err
          );
          if (attempt >= 2) {
            console.error(
              `All retry attempts failed for database ${databaseId}`,
              err
            );
            throw err;
          }
        }
      }
      const { results, nextCursor } = pageResult;
      all.push(...results);
      startCursor = nextCursor;
    } while (startCursor);
  } catch (error) {
    console.error(`Error fetching pages for database ${databaseId}:`, error);
    return all;
    // throw error;
  }
  return all;
}


export async function getAllArticles() {
  return await getAllPages(process.env.NOTION_ARTICLES_DATABASE_ID || "NOTION_KEY");
}
export async function getAllTags() {
  return await getAllPages(process.env.NOTION_TAGS_DATABASE_ID || "NOTION_KEY");
}
export async function getAllCategories() {
  return await getAllPages(process.env.NOTION_CATEGORIES_DATABASE_ID || "NOTION_KEY");
}
export async function getAllContributors() {
  return await getAllPages(process.env.NOTION_CONTRIBUTERS_DATABASE_ID || "NOTION_KEY");
}
export async function getAllFallacies() {
  return await getAllPages(process.env.NOTION_FALLACIES_DATABASE_ID || "NOTION_KEY");
}



/////////////////////////////////////
/////////////GET PAGE BY SLUG////////
/////////////////////////////////////

export async function getPageFromSlug(slug) {
  try {
    const response = await read_notion.databases.query({
      database_id: process.env.NOTION_ARTICLES_DATABASE_ID || "NOTION_KEY",
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
};

/////////////////////////////////
///////////GET PAGE BY ID//////////
/////////////////////////////////

export async function getPageById(pageId) {
  try {
    const response = await read_notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error('[Notion] Failed to get page by ID:', error.message);
    return null;
  }
}

//////////////////////////////////////
///////////GET BLOCKS BY PAGE ID//////
//////////////////////////////////////

export async function getBlocks(blockID) {
  const blockId = blockID?.replaceAll('-', '');
  const { results } = await read_notion.blocks.children.list({
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
          id: uuid(),
          type: 'bulleted_list',
          bulleted_list: { children: [curr] },
        });
      }
    } else if (curr.type === 'numbered_list_item') {
      if (acc[acc.length - 1]?.type === 'numbered_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: uuid(),
          type: 'numbered_list',
          numbered_list: { children: [curr] },
        });
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []));
};