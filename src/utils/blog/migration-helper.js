import { getAllArticlesData } from '@/utils/blog/articles-functions';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_WRITE_TOKEN });

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


export async function CreateContributerIfNotExists(databaseId, name, link, role = "Author", retry = false) {
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


////////////////////////////
//// NEW ARTICLE PAGE //////
////////////////////////////
/**
 * Creates a page in the ReasonOFHope Notion database with all supported fields.
 * 
 * @param {string} databaseId
 * @param {Object} data - Full page content
 */
export async function createArticlePage(databaseId, data) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // 1. Title (required)
        Title: {
          title: [{ text: { content: data.title } }],
        },

        // 2. Slug (rich_text)
        ...(data.slug && {
          Slug: {
            rich_text: [{ text: { content: data.slug } }],
          },
        }),

        // 3. Date (Notion date)
        ...(data.date && {
          Date: {
            date: { start: data.date },
          },
        }),

        // 4. Archive URL
        ...(data.archive && {
          Archive: {
            url: data.archive,
          },
        }),

        // 5. Authors (relation)
        ...(data.authorIds?.length && {
          Authors: {
            relation: data.authorIds.map(id => ({ id })),
          },
        }),

        // 6. PDF URL
        ...(data.pdf && {
          PDF: {
            url: data.pdf,
          },
        }),

        // 7. AppleBooks URL
        ...(data.appleBooks && {
          AppleBooks: {
            url: data.appleBooks,
          },
        }),

        // 8. CMI URL
        ...(data.cmi && {
          CMI: {
            url: data.cmi,
          },
        }),

        // 9. Spotify URL
        ...(data.spotify && {
          spotify: {
            url: data.spotify,
          },
        }),

        // 10. Description (rich_text)
        ...(data.description && {
          Description: {
            rich_text: [{ text: { content: data.description } }],
          },
        }),

        // 11. EPUB URL
        ...(data.epub && {
          EPUB: {
            url: data.epub,
          },
        }),

        // 12. GoogleBooks URL
        ...(data.googleBooks && {
          GoogleBooks: {
            url: data.googleBooks,
          },
        }),

        // 13. MainCategory (select)
        ...(data.mainCategory && {
          MainCategory: {
            select: { name: data.mainCategory },
          },
        }),

        // 14. Featured (checkbox)
        ...(data.featured !== undefined && {
          Featured: {
            checkbox: data.featured,
          },
        }),

        // 15. Published (checkbox)
        ...(data.published !== undefined && {
          Published: {
            checkbox: data.published,
          },
        }),

        // 16. IsBook (checkbox)
        ...(data.isBook !== undefined && {
          IsBook: {
            checkbox: data.isBook,
          },
        }),

        // 17. Translators (relation)
        ...(data.translatorIds?.length && {
          Translators: {
            relation: data.translatorIds.map(id => ({ id })),
          },
        }),

        // 18. Tags (relation)
        ...(data.tagIds?.length && {
          Tags: {
            relation: data.tagIds.map(id => ({ id })),
          },
        }),
      },

      // 19. CoverImage (files via external URL)
      ...(data.coverImage && {
        cover: {
          external: {
            url: data.coverImage,
          },
        },
      }),
    });

    return response;
  } catch (error) {
    console.error('[Notion] Failed to create page:', error.message);
    throw error;
  }
}




//////////////////////////
// ARTICLES PROPERTIES///
////////////////////////

export async function getArticlesPropertiesFromMD() {
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
export async function getContributersFromMD() {
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
            URL: author.link ?? "/"
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
            URL: translator.link ?? "/"
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




//////////////////
//////Mapping/////
//////////////////

/**
 * Maps a Notion tag page or array of pages to extract id and plain text tag title.
 *
 * @param {object|object[]} input - Single page object or array of page objects
 * @returns {object|object[]} Mapped object(s) with { id, tag }
 */
export function mapTagPages(input) {
  const mapSingle = (page) => ({
    id: page.id,
    tag: page.properties?.Tag?.title?.[0]?.plain_text || '',
  });

  if (Array.isArray(input)) {
    return input.map(mapSingle);
  }

  return mapSingle(input);
}

/**
 * Maps a Notion category page or array of pages to extract id and plain text category title.
 *
 * @param {object|object[]} input - A Notion page object or array of page objects
 * @returns {object|object[]} Mapped object(s) with { id, category }
 */
export function mapCategoryPages(input) {
  const mapSingle = (page) => ({
    id: page.id,
    category: page.properties?.Category?.title?.[0]?.plain_text || '',
  });

  if (Array.isArray(input)) {
    return input.map(mapSingle);
  }

  return mapSingle(input);
}

/**
 * Maps one or more Notion contributor pages to extract:
 * - id: page ID
 * - name: plain text from Name (title)
 * - roles: array of role names from multi_select
 * - url: value from URL field (if provided)
 *
 * @param {object|object[]} input - A Notion page or array of pages
 * @returns {object|object[]} Mapped contributor object(s)
 */
export function mapContributorPages(input) {
  const mapSingle = (page) => ({
    id: page.id,
    name: page.properties?.Name?.title?.[0]?.plain_text || '',
    bio: page.properties?.Bio?.rich_text?.[0]?.plain_text || '',
    roles: (page.properties?.Role?.multi_select || []).map(role => role.name),
    url: page.properties?.URL?.url || '',
  });

  if (Array.isArray(input)) {
    return input.map(mapSingle);
  }

  return mapSingle(input);
}


/**
 * Maps a Notion page or array of pages representing a fallacy or article
 * extracting title, description, and video fields.
 *
 * @param {object|object[]} input - A Notion page object or array of pages
 * @returns {{ id: string, title: string, description: string, video: string }[]|object}
 */
export function mapFallacyPage(input) {
  const mapSingle = (page) => ({
    id: page.id,
    title:
      page.properties?.Fallacy?.title?.[0]?.plain_text ||
      page.properties?.Title?.rich_text?.[0]?.plain_text ||
      page.properties?.title?.title?.[0]?.plain_text ||
      '',
    description: (page.properties?.Description?.rich_text || [])
      .map(rt => rt.plain_text || '')
      .join(' ')
      .trim(),
    video: (page.properties?.Video?.rich_text?.[0]?.plain_text || '').trim(),
  });

  return Array.isArray(input) ? input.map(mapSingle) : mapSingle(input);
}
