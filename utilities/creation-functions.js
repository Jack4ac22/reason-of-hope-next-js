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

function orderCreationArticlesBy(creationArticles, orderBy) {
  try {
    return creationArticles.sort((creationArticleA, creationArticleB) =>
      creationArticleA[orderBy] > creationArticleB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return creationArticles;
  }
}

const creationArticlesDirectory = path.join(process.cwd(), "content/creation");

export function getCreationArticlesFiles() {
  return fs.readdirSync(creationArticlesDirectory);
}

export function getCreationArticleData(creationArticleIdentifier) {
  const creationArticleSlug = creationArticleIdentifier.replace(/\.md$/, "");
  const filePath = path.join(
    creationArticlesDirectory,
    `${creationArticleSlug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const creationArticleData = {
    slug: creationArticleSlug,
    ...data,
    content: content,
  };
  return creationArticleData;
}

export function getAllCreationArticles(orderedBy = "date") {
  const creationArticleFiles = getCreationArticlesFiles();
  const allCreationArticles = creationArticleFiles.map(
    (creationArticleFile) => {
      return getCreationArticleData(creationArticleFile);
    }
  );

  return orderCreationArticlesBy(allCreationArticles, orderedBy);
}

export function getCreationArticlesByTag(tag = "") {
  return getAllCreationArticles().filter((creationArticle) => {
    if (creationArticle && creationArticle.tags) {
      return creationArticle.tags.includes(tag);
    }
    return false;
  });
}

export function getCreationArticlesByCategory(category = "") {
  return getAllCreationArticles().filter((creationArticle) => {
    if (creationArticle && creationArticle.category) {
      return creationArticle.category.includes(category);
    }
    return false;
  });
}

export function getCreationArticlesBySearchTerm(searchTerm = "") {
  return getAllCreationArticles().filter((creationArticle) => {
    if (creationArticle && creationArticle.title) {
      return (
        creationArticle.title.includes(searchTerm) ||
        creationArticle.content.includes(searchTerm)
      );
    }
    return false;
  });
}

export function getCreationArticlesByTitleSearch(searchTerm = "") {
  return getAllCreationArticles().filter((creationArticle) => {
    if (creationArticle && creationArticle.title) {
      return creationArticle.title.includes(searchTerm);
    }
    return false;
  });
}

export function getAllCreationsTags() {
  const allCreationArticles = getAllCreationArticles();
  const allTags = [];
  allCreationArticles.forEach((creationArticle) => {
    if (creationArticle && creationArticle.tags) {
      creationArticle.tags.forEach((tag) => {
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
  return allTags.sort((tagA, tagB) => (tagA.tag > tagB.tag ? 1 : -1));
}

export function getAllCreationsCategories() {
  const allCreationArticles = getAllCreationArticles();
  const allCategories = [];
  allCreationArticles.forEach((creationArticle) => {
    if (creationArticle && creationArticle.categories) {
      creationArticle.categories.forEach((category) => {
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
    categoryA.category > categoryB.category ? 1 : -1
  );
}
