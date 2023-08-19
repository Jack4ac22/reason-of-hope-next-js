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

function orderObjectionsBy(objections, orderBy) {
  try {
    return objections.sort((objectionA, objectionB) =>
      objectionA[orderBy] > objectionB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return objections;
  }
}

const objectionsDirectory = path.join(process.cwd(), "content/objections");

export function getObjectionsFiles() {
  return fs.readdirSync(objectionsDirectory);
}

export function getObjectionData(objectionIdentifier) {
  const objectionSlug = objectionIdentifier.replace(/\.md$/, "");
  const filePath = path.join(objectionsDirectory, `${objectionSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const objectionData = {
    slug: objectionSlug,
    ...data,
    content: content,
  };
  return objectionData;
}

export function getAllObjections(orderedBy = "date") {
  const objectionFiles = getObjectionsFiles();
  const allObjections = objectionFiles.map((objectionFile) => {
    return getObjectionData(objectionFile);
  });

  return orderObjectionsBy(allObjections, orderedBy);
}

export function getObjectionsByTag(tag = "") {
  return getAllObjections().filter((objection) => {
    if (objection && objection.tags) {
      return objection.tags.includes(tag);
    }
    return false;
  });
}

export function getObjectionsByCategory(category = "") {
  return getAllObjections().filter((objection) => {
    if (objection && objection.category) {
      return objection.category.includes(category);
    }
    return false;
  });
}

export function getObjectionsBySearchTerm(searchTerm = "") {
  return getAllObjections().filter((objection) => {
    if (objection && objection.title) {
      return (
        objection.title.includes(searchTerm) ||
        objection.content.includes(searchTerm)
      );
    }
    return false;
  });
}

export function getObjectionsByTitleSearch(searchTerm = "") {
  return getAllObjections().filter((objection) => {
    if (objection && objection.title) {
      return objection.title.includes(searchTerm);
    }
    return false;
  });
}

export function getAllObjectionsTags() {
  const allObjectionArticles = getAllObjections();
  const allTags = [];
  allObjectionArticles.forEach((objectionArticle) => {
    if (objectionArticle && objectionArticle.tags) {
      objectionArticle.tags.forEach((tag) => {
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

export function getAllObjectionsCategories() {
  const allObjectionArticles = getAllObjections();
  const allCategories = [];
  allObjectionArticles.forEach((objectionArticle) => {
    if (objectionArticle && objectionArticle.categories) {
      objectionArticle.categories.forEach((category) => {
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
