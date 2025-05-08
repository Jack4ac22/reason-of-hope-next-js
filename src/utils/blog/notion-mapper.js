'use server';
import { getAllTags, getAllCategories, queryDatabasePaginated, getPage, getAllContributors, getAllFallacies } from "@/utils/blog/updated-notion-helper";



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
      const page = await getPage(id);
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
      const page = await getPage(id);
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
      const page = await getPage(id);
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
      const page = await getPage(id);
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

