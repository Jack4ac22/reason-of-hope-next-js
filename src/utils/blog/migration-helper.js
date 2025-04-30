import { getAllArticlesData } from '@/utils/blog/articles-functions';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a new tag in the given Notion database under the 'Tag' title property.
 * Avoids duplicates based on name.
 *
 * @param {string} databaseId - The ID of the Tags database
 * @param {string} tagName - The tag to add
 * @returns {Promise<object>} The created or existing page object
 */
export async function createTagIfNotExists(databaseId, field, tagName, retry = false) {
  try {
    // Check if tag already exists
    const existing = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: field,
        title: {
          equals: tagName,
        },
      },
    });
    // handle 500 response
    if (existing.status === 502) {
      console.error('[Notion] 502 Bad Gateway error. Retrying...');
      await sleep(2000);
      if (!retry) {
        console.error('[Notion] Retrying failed request...');
        return createTagIfNotExists(databaseId, field, tagName, false);
      }
      console.error('[Notion] Retried request failed again. Exiting...');
      return { error: '502 Bad Gateway error' };
    }
    if (existing.results.length > 0) {
      console.log(`[Notion] ${field} "${tagName}" already exists.`);
      return { alreadyExists: true, page: existing.results[0] };
    }
    sleep(200);

    const response = field == "Tag" ?
      // Create new tag page
      await notion.pages.create({
        parent: {
          database_id: databaseId,
        },
        properties: {
          Tag: {
            title: [
              {
                text: {
                  content: tagName,
                },
              },
            ],
          },
        },
      }) : await notion.pages.create({
        parent: {
          database_id: databaseId,
        },
        properties: {
          Category: {
            title: [
              {
                text: {
                  content: tagName,
                },
              },
            ],
          }
        }
      });



    console.log(`[Notion] Created new ${field} "${tagName}".`);
    sleep(200);
    return { created: true, page: response };
  } catch (error) {
    console.error('[Notion] Failed to create:', error.message);
    throw error;
  }
}


export async function CreateContributerIfNotExists(databaseId, name, link, role="Author", retry = false) {
  try {
    // Check if tag already exists
    const existing = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Name",
        rich_text: {
          equals: name,
        },
      },
    });
    // handle 500 response
    if (existing.status === 502) {
      console.error('[Notion] 502 Bad Gateway error. Retrying...');
      await sleep(2000);
      if (!retry) {
        console.error('[Notion] Retrying failed request...');
        return CreateContributerIfNotExists(databaseId, name, link, role, false);
      }
      console.error('[Notion] Retried request failed again. Exiting...');
      return { error: '502 Bad Gateway error' };
    }
    if (existing.results.length > 0) {
      console.log(`[Notion] ${role} "${name}" already exists.`);
      return { alreadyExists: true, page: existing.results[0] };
    }
    sleep(200);

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        URL: {
          url: link,
        },
        Role: {
          select: {
            name: role,
          },
        }
      },
    });
    console.log(`[Notion] Created new ${role} "${name}".`);
    sleep(200);
    return { created: true, page: response };
  } catch (error) {
    console.error('[Notion] Failed to create:', error.message);
    throw error;
  }
}


export async function articlesProperties() {
  const articles = await getAllArticlesData();
  // map the articles to remove data field from each article
  const articlesWithoutData = articles.map(article => {
    const { content, ...rest } = article;
    return rest;
  });
  console.log(` got ${articlesWithoutData.length} articles without content field`);
  return articlesWithoutData;
}

// get authors and translators from articles
export async function getContributers() {
  const articlesHeadingList = getAllArticlesData();
  const contributers = [];
  for (const article of articlesHeadingList) {
    const { authors, translators } = article;
    if (authors) {
      // authors is an array of objects with name field and link field
      authors.map(author => {
        const authorExists = contributers.find(contributer => contributer.name === author.name);
        if (!authorExists) {
          contributers.push({
            Name: author.name,
            URL: author.link == " " || "/"
          });
        }
      });
    }
    if (translators) {
      // translators is an array of objects with name field and link field
      translators.map(translator => {
        const translatorExists = contributers.find(contributer => contributer.name === translator.name);
        if (!translatorExists) {
          contributers.push({
            Name: translator.name,
            URL: translator.link =="" || "/"
          });
        }
      });
    }
  }
  // insure that contributers is unique
  const uniqueContributers = [];
  const contributersMap = new Map();
  for (const contributer of contributers) {
    if (!contributersMap.has(contributer.Name)) {
      uniqueContributers.push(contributer);
      contributersMap.set(contributer.Name, true);
    }
  }
  console.log(` got ${uniqueContributers.length} unique contributers`);
  return uniqueContributers;
}

