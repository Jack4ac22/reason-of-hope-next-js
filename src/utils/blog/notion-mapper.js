'use server';
import { getAllTags, getAllCategories, queryDatabasePaginated, getPageById, getAllContributors, getAllFallacies } from "@/utils/blog/updated-notion-helper";



//////////////////////////////////////
///////////MAPPING PAGES//////////////
//////////////////////////////////////

export async function mapAllTags() {
  const allTags = await getAllTags();
  if (!allTags) {
    return [];
  }
  const mappedTags = allTags.map((page) => {
    return {
      id: page.id,
      tag: page.properties?.Tag?.title?.[0]?.plain_text || '',
    };
  });
  return mappedTags;
}

/**
 * Retrieves a single tag from the Notion Tags database by either `id` or `tagName`.
 *
 * @param {Object} params
 * @param {string} [params.id] - Optional: the page ID of the tag.
 * @param {string} [params.tagName] - Optional: the plain-text tag name.
 * @returns {Promise<{ id: string, tag: string } | null>}
 */
export async function mapSingleTag({ id, tagName }) {
  if (!id && !tagName) {
    throw new Error('You must provide either "id" or "tagName".');
  }

  let results;

  if (id) {
    // Direct page retrieval by ID
    try {
      const page = await getPageById(id);
      if (page) {
        return {
          id: page.id,
          tag: page.properties?.Tag?.title?.[0]?.plain_text || '',
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving page by ID:', error);
      return null;
    }
  } else {
    // Query by tag name
    const response = await queryDatabasePaginated(process.env.NOTION_TAGS_DATABASE_ID, {
      filter: {
        property: 'Tag',
        title: { equals: tagName },
      },
    });
    results = response.results;
  }

  const page = results?.[0];
  if (!page) return null;

  return {
    id: page.id,
    tag: page.properties?.Tag?.title?.[0]?.plain_text || '',
  };
}


export async function mapAllCategories() {
  const allCategories = await getAllCategories();
  if (!allCategories) {
    return [];
  }
  const mappedCategories = allCategories.map((page) => {
    return {
      id: page.id,
      category: page.properties?.Category?.title?.[0]?.plain_text || '',
    };
  });
  return mappedCategories;
}

export async function mapSingleCategory({ id, categoryName }) {
  if (!id && !categoryName) {
    throw new Error('You must provide either "id" or "categoryName".');
  }

  let results;

  if (id) {
    // Direct page retrieval by ID
    try {
      const page = await getPageById(id);
      if (page) {
        return {
          id: page.id,
          category: page.properties?.Category?.title?.[0]?.plain_text || '',
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving page by ID:', error);
      return null;
    }
  } else {
    // Query by category name
    const response = await queryDatabasePaginated(process.env.NOTION_CATEGORIES_DATABASE_ID, {
      filter: {
        property: 'Category',
        title: { equals: categoryName },
      },
    });
    results = response.results;
  }

  const page = results?.[0];
  if (!page) return null;

  return {
    id: page.id,
    category: page.properties?.Category?.title?.[0]?.plain_text || '',
  };
}

export async function mapAllContributors() {
  const allContributors = await getAllContributors();
  if (!allContributors) {
    return [];
  }
  const mappedContributors = allContributors.map((page) => {
    return {
      id: page.id,
      name: page.properties?.Name?.title?.[0]?.plain_text || '',
      bio: page.properties?.Bio?.rich_text?.[0]?.plain_text || '',
      roles: (page.properties?.Role?.multi_select || []).map(role => role.name),
      url: page.properties?.URL?.url || '',
    };
  });
  return mappedContributors;
}

export async function mapSingleContributor({ id, contributorName }) {
  if (!id && !contributorName) {
    throw new Error('You must provide either "id" or "contributorName".');
  }

  let results;

  if (id) {
    // Direct page retrieval by ID
    try {
      const page = await getPageById(id);
      if (page) {
        return {
          id: page.id,
          name: page.properties?.Name?.title?.[0]?.plain_text || '',
          bio: page.properties?.Bio?.rich_text?.[0]?.plain_text || '',
          roles: (page.properties?.Role?.multi_select || []).map(role => role.name),
          url: page.properties?.URL?.url || '',
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving page by ID:', error);
      return null;
    }
  } else {
    // Query by contributor name
    const response = await queryDatabasePaginated(process.env.NOTION_CONTRIBUTORS_DATABASE_ID, {
      filter: {
        property: 'Contributor',
        title: { equals: contributorName },
      },
    });
    results = response.results;
  }
  const page = results?.[0];
  if (!page) return null;

  return {
    id: page.id,
    name: page.properties?.Name?.title?.[0]?.plain_text || '',
    bio: page.properties?.Bio?.rich_text?.[0]?.plain_text || '',
    roles: (page.properties?.Role?.multi_select || []).map(role => role.name),
    url: page.properties?.URL?.url || '',
  };
}


export async function mapAllFallacies() {
  const allFallacies = await getAllFallacies();
  if (!allFallacies) {
    return [];
  }
  const mappedFallacies = allFallacies.map((page) => {
    return {
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
      article: (page.properties?.Article?.rich_text?.[0]?.plain_text || '').trim(),
    };
  });
  return mappedFallacies;
}


export async function mapSingleFallacy({ id, fallacyName }) {
  if (!id && !fallacyName) {
    throw new Error('You must provide either "id" or "fallacyName".');
  }

  let results;

  if (id) {
    // Direct page retrieval by ID
    try {
      const page = await getPageById(id);
      if (page) {
        return {
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
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving page by ID:', error);
      return null;
    }
  } else {
    // Query by fallacy name
    const response = await queryDatabasePaginated(process.env.NOTION_FALLACIES_DATABASE_ID, {
      filter: {
        property: 'Fallacy',
        title: { equals: fallacyName },
      },
    });
    results = response.results;
  }

  const page = results?.[0];
  if (!page) return null;

  return {
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
  };
}



/////////////////////////////////
// MAP Article/Page properties //
/////////////////////////////////

export async function getPagePropertiesInFlatObject(properties) {
  return {
    id: properties?.id,
    slug: properties?.Slug?.rich_text?.[0]?.plain_text || '',
    date: properties?.Date?.date?.start || '',
    archive: properties?.Archive?.url || '',
    pdf: properties?.PDF?.url || '',
    youtube: properties?.youtube?.rich_text?.[0]?.plain_text || '',
    appleBooks: properties?.AppleBooks?.url || '',
    cmi: properties?.CMI?.url || '',
    spotify: properties?.spotify?.url || '',
    description: (properties?.Description?.rich_text || [])
      .map(rt => rt.plain_text)
      .join(' ')
      .trim(),
    epub: properties?.EPUB?.url || '',
    googleBooks: properties?.GoogleBooks?.url || '',
    mainCategory: properties?.MainCategory?.select?.name || '',
    featured: properties?.Featured?.checkbox || false,
    published: properties?.Published?.checkbox || false,
    isBook: properties?.IsBook?.checkbox || false,
    coverImage: properties?.Cover?.url || '',

    tags: properties?.Tags?.relation?.map(rel => rel.id) || [],
    authors: properties?.Authors?.relation?.map(rel => rel.id) || [],
    translators: properties?.Translators?.relation?.map(rel => rel.id) || [],
    fallacies: properties?.Fallacies?.relation?.map(rel => rel.id) || [],
    subcategories: properties?.Subcategories?.relation?.map(rel => rel.id) || [],

    title:
      properties?.Title?.title?.[0]?.plain_text ||
      properties?.title?.title?.[0]?.plain_text ||
      '',
  };
}




//////////////////////// //
// MAP MD TO NOTION PAGE //
//////////////////////// //

// helper function for debuggining purposes, // check if there is any undefined values and filter out undefined values and print the number of filtered values

function filterUndefinedValues(array) {
  const filtered = array.filter(Boolean);
  // console.log(`Filtered ${array.length - filtered.length} undefined values`);
  return filtered;
}


// helper function to reduce arrays of objects to array of ids of objects
function reduceToIds(array) {
  return array.map(item => item.id);
}

// helper function to reduce array of objects to an object with key values 
function reduceResources(array) {
  const reduced = array.reduce((acc, item) => {
    const { title, link } = item;
    if (title && link) {
      acc[title] = link;
    }
    return acc;
  }, {});
  return reduced;
}


export async function mapContentMetaToArticleProps(data) {
  const allTags = await mapAllTags();
  const allCategories = await mapAllCategories();
  const allContributors = await mapAllContributors();
  const allFallacies = await mapAllFallacies();

  let tagPages = [];
  let categoryPages = [];
  let authorPages = [];
  let translatorPages = [];
  let fallacyPages = [];

  if (data.tags && data?.tags?.length !== 0) {
    tagPages = data?.tags.map(tag => allTags.find(t => t.tag === tag));
    tagPages = filterUndefinedValues(tagPages);
  }
  if (data.categories && data?.categories?.length !== 0) {
    categoryPages = data?.categories.map(category => allCategories.find(c => c.category === category));
    categoryPages = filterUndefinedValues(categoryPages);
  }
  if (data.authors && data?.authors?.length !== 0) {
    authorPages = data?.authors.map(author =>
      allContributors.find(a => a.name === author.name));
    authorPages = filterUndefinedValues(authorPages);
  }
  if (data.translators && data?.translators?.length !== 0) {
    translatorPages = data?.translators.map(translator => allContributors.find(t => t.name === translator.name));
    translatorPages = filterUndefinedValues(translatorPages);
  }
  if (data.fallacies && data?.fallacies?.length !== 0) {
    fallacyPages = data?.fallacies.map(fallacy => allFallacies.find(f => f.title === fallacy));
    fallacyPages = filterUndefinedValues(fallacyPages);
  }
  const relationship = {
    tags: reduceToIds(tagPages),
    categories: reduceToIds(categoryPages),
    authors: reduceToIds(authorPages),
    translators: reduceToIds(translatorPages),
    fallacies: reduceToIds(fallacyPages),
  }

  const resources = data.resources ? reduceResources(data.resources) : {};

  const audio = data?.audio?.reduce((acc, item) => {
    return { ...acc, ...item };
  }, {}) || {} || {};
  return {
    title: data.title,

    slug: data.slug,
    description: data.description || '',
    date: data.date,
    published: data.status === 'published',
    featured: data.featured ?? false,
    isBook: data.isBook ?? false,

    mainCategory: data.directory || '',

    coverImage: `${data.coverImage}` || '',

    youtube: data.youtube || '',

    pdf: resources.pdf || '',
    archive: resources.archive || '',
    googleBooks: resources.googleBooks || '',
    appleBooks: resources.appleBooks || '',
    epub: resources.epub || '',

    spotify: audio.spotify || data.spotify || '',


    cmi: data.cmi || '',
    youtube: data.youtube || '',

    ...relationship
  };
}
