import { v4 as uuid } from 'uuid';
import { Client } from '@notionhq/client';


/**
 * @type {import('@notionhq/client').Client}
 * @description Notion client instance
 */
const notion = new Client({
  auth: process.env.NOTION_TOKEN || "NOTION_KEY",
});

export const revalidate = 3600; // revalidate the data at most every hour

/**
 * 
 */
const queryDatabasePaginated = async function (databaseId, options) {
  const pageSize = 100; // Maximum number of results per request
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    ...options,
  });
  return response;
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
export const getAllPages = async function (databaseId) {
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
    // throw error;
  }
  return all;
}


export const getTags = (async () => await getAllPages(process.env.NOTION_TAGS_DATABASE_ID || "NOTION_KEY"));
export const getCategories = (async () => await getAllPages(process.env.NOTION_CATEGORIES_DATABASE_ID || "NOTION_KEY"));
export const getContributors = (async () => await getAllPages(process.env.NOTION_CONTRIBUTERS_DATABASE_ID || "NOTION_KEY"));
export const getFallacies = (async () => await getAllPages(process.env.NOTION_FALLACIES_DATABASE_ID || "NOTION_KEY"));
export const getArticles = (async () => await getAllPages(process.env.NOTION_DATABASE_ID || "NOTION_KEY"));
