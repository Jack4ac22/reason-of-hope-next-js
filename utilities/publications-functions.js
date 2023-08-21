import fs from "fs";
import path from "path";

import matter from "gray-matter";

function consoleLog(message) {
  console.log("****************************************");
  console.log("****************************************");
  console.log(message);
  console.log("****************************************");
  console.log("****************************************");
}

function orderPublicationsBy(publications, orderBy) {
  try {
    return publications.sort((publicationA, publicationB) =>
      publicationA[orderBy] > publicationB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return publications;
  }
}

const publicationsDirectory = path.join(process.cwd(), "content/publications");

export function getPublicationsFiles() {
  return fs.readdirSync(publicationsDirectory);
}

export function getPublicationData(publicationIdentifier) {
  const publicationSlug = publicationIdentifier.replace(/\.md$/, "");
  const filePath = path.join(publicationsDirectory, `${publicationSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const publicationData = {
    slug: publicationSlug,
    ...data,
    content: content,
  };
  return publicationData;
}

export function getAllPublications(orderedBy = "date") {
  const publicationFiles = getPublicationsFiles();
  const allPublications = publicationFiles.map((publicationFile) => {
    return getPublicationData(publicationFile);
  });

  return orderPublicationsBy(allPublications, orderedBy);
}

export function getPublicationsByTag(tag = "") {
  return getAllPublications().filter((publication) => {
    if (publication && publication.tags) {
      return publication.tags.includes(tag);
    }
    return false;
  });
}

export function getPublicationsByCategory(category = "") {
  return getAllPublications().filter((publication) => {
    if (publication && publication.categories) {
      return publication.categories.includes(category);
    }
    return false;
  });
}

export function getPublicationsBySearchTerm(searchTerm = "") {
  return getAllPublications().filter((publication) => {
    if (publication && publication.title) {
      return (
        publication.title.includes(searchTerm) ||
        publication.content.includes(searchTerm)
      );
    }
    return false;
  });
}

export function getPublicationsByTitleSearch(searchTerm = "") {
  return getAllPublications().filter((publication) => {
    if (publication && publication.title) {
      return publication.title.includes(searchTerm);
    }
    return false;
  });
}
// TODO: add counting of tags and categories
export function getAllPublicationsTags() {
  const allPublicationArticles = getAllPublications();
  const allTags = [];
  allPublicationArticles.forEach((publicationArticle) => {
    if (publicationArticle && publicationArticle.tags) {
      publicationArticle.tags.forEach((tag) => {
        const tagIndex = allTags.findIndex(
          (tagObject) => tagObject.tag === tag
        );
        if (tagIndex === -1) {
          allTags.push({ tag: tag, count: 1 });
        } else {
          allTags[tagIndex].count++;
        }
      });
    }
  });
  return allTags.sort((tagA, tagB) => (tagA.count < tagB.count ? 1 : -1));
}

export function getAllPublicationsCategories() {
  const allPublicationArticles = getAllPublications();
  const allCategories = [];
  allPublicationArticles.forEach((publicationArticle) => {
    if (publicationArticle && publicationArticle.categories) {
      publicationArticle.categories.forEach((category) => {
        const categoryIndex = allCategories.findIndex(
          (categoryObject) => categoryObject.category === category
        );
        if (categoryIndex === -1) {
          allCategories.push({ category: category, count: 1 });
        } else {
          allCategories[categoryIndex].count++;
        }
      });
    }
  });
  return allCategories.sort((categoryA, categoryB) =>
    categoryA.count < categoryB.count ? 1 : -1
  );
}
