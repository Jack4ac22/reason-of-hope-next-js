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

const current_enviroment = process.env.NODE_ENV || "development";

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
          // Query the database if environment is production get only published pages which is a checkbox
          if (current_enviroment === "production") {
            pageResult = await queryDatabasePaginated(databaseId, {
              filter: {
                property: "Published",
                checkbox: {
                  equals: true,
                },
              },
            }, { startCursor });
          } else {
            pageResult = await queryDatabasePaginated(databaseId, { startCursor });
          }
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
  if (!slug || typeof slug !== 'string') {
    console.warn('[Notion] getPageFromSlug was called with invalid slug:', slug);
    return null;
  }

  try {
    const response = await read_notion.databases.query({
      database_id: process.env.NOTION_ARTICLES_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
        ...process.env.NODE_ENV === 'production' && { property: 'Published', checkbox: { equals: true } },
      },
    });

    return response.results?.[0] || null;
  } catch (error) {
    console.error('[Notion] Failed to get page from slug:', error.message);
    return null;
  }
}


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
  let blocks = [];
  let cursor = undefined;

  do {
    const response = await read_notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor,
    });

    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  // Fetch nested children if needed
  const childBlocks = await Promise.all(
    blocks.map(async (block) => {
      if (block.has_children) {
        const children = await getBlocks(block.id);
        return { ...block, children };
      }
      return block;
    })
  );

  // Merge consecutive list items into bulleted or numbered lists
  return childBlocks.reduce((acc, curr) => {
    const prev = acc[acc.length - 1];
    if (curr.type === 'bulleted_list_item') {
      if (prev?.type === 'bulleted_list') {
        prev.bulleted_list.children.push(curr);
      } else {
        acc.push({ id: uuid(), type: 'bulleted_list', bulleted_list: { children: [curr] } });
      }
    } else if (curr.type === 'numbered_list_item') {
      if (prev?.type === 'numbered_list') {
        prev.numbered_list.children.push(curr);
      } else {
        acc.push({ id: uuid(), type: 'numbered_list', numbered_list: { children: [curr] } });
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}




//////////////////////////////////////////////////////////
///////////GET X RANDOM PAGES BY mainCategory field //////
//////////////////////////////////////////////////////////

export async function getRelatedPages({ tagIds = [], subcategoryIds = [], count = 5 }) {
  /**
   * Retrieves related Notion pages that match any of the provided tag or subcategory relation IDs.
   *
   * This function:
   * - Searches pages in the articles database.
   * - Matches pages that have ANY of the specified Tags OR Subcategories (via relation fields).
   * - Filters by 'Published' status in production.
   * - Shuffles and returns a limited number of pages.
   * - Retries up to two times on failure.
   *
   * @param {Object} params
   * @param {string[]} params.tagIds - Array of tag page IDs to match in the Tags relation field.
   * @param {string[]} params.subcategoryIds - Array of subcategory page IDs to match in the Subcategories relation field.
   * @param {number} [params.count=5] - Number of pages to return.
   * @returns {Promise<object[]>} - Array of matching Notion page objects.
   */

  const buildFilter = () => {
    const baseFilter = {
      or: [
        ...tagIds.map((id) => ({
          property: 'Tags',
          relation: { contains: id },
        })),
        ...subcategoryIds.map((id) => ({
          property: 'Subcategories',
          relation: { contains: id },
        })),
      ],
    };

    if (process.env.NODE_ENV === 'production') {
      return {
        and: [
          baseFilter,
          { property: 'Published', checkbox: { equals: true } },
        ],
      };
    }

    return baseFilter;
  };

  let attempt = 0;
  while (attempt < 2) {
    try {
      const response = await read_notion.databases.query({
        database_id: process.env.NOTION_ARTICLES_DATABASE_ID,
        filter: buildFilter(),
      });

      const shuffled = response.results.sort(() => Math.random() - 0.5).slice(0, count);
      return shuffled;
    } catch (error) {
      console.error(`[Notion] Attempt ${attempt + 1} failed:`, error.message);
      attempt++;
    }
  }

  console.error('[Notion] Failed to get related pages after 2 attempts.');
  return [];
}
