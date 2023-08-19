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

function orderLogicsBy(logics, orderBy) {
  try {
    return logics.sort((logicA, logicB) =>
      logicA[orderBy] > logicB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return logics;
  }
}

const logicsDirectory = path.join(process.cwd(), "content/logic");

export function getLogicsFiles() {
  return fs.readdirSync(logicsDirectory);
}

export function getLogicData(logicIdentifier) {
  const logicSlug = logicIdentifier.replace(/\.md$/, "");
  const filePath = path.join(logicsDirectory, `${logicSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const logicData = {
    slug: logicSlug,
    ...data,
    content: content,
  };
  return logicData;
}

export function getAllLogics(orderedBy = "date") {
  const logicFiles = getLogicsFiles();
  const allLogics = logicFiles.map((logicFile) => {
    return getLogicData(logicFile);
  });

  return orderLogicsBy(allLogics, orderedBy);
}

export function getLogicsByTag(tag = "") {
  return getAllLogics().filter((logic) => {
    if (logic && logic.tags) {
      return logic.tags.includes(tag);
    }
    return false;
  });
}

export function getLogicsByCategory(category = "") {
  return getAllLogics().filter((logic) => {
    if (logic && logic.category) {
      return logic.category.includes(category);
    }
    return false;
  });
}

export function getLogicsBySearchTerm(searchTerm = "") {
  return getAllLogics().filter((logic) => {
    if (logic && logic.title) {
      return (
        logic.title.includes(searchTerm) || logic.content.includes(searchTerm)
      );
    }
    return false;
  });
}

export function getLogicsByTitleSearch(searchTerm = "") {
  return getAllLogics().filter((logic) => {
    if (logic && logic.title) {
      return logic.title.includes(searchTerm);
    }
    return false;
  });
}

// TODO: add counting of tags and categories
export function getAllLogicsTags() {
  const allLogicArticles = getAllLogics();
  const allTags = [];
  allLogicArticles.forEach((logicArticle) => {
    if (logicArticle && logicArticle.tags) {
      logicArticle.tags.forEach((tag) => {
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

export function getAllLogicsCategories() {
  const allLogicArticles = getAllLogics();
  const allCategories = [];
  allLogicArticles.forEach((logicArticle) => {
    if (logicArticle && logicArticle.categories) {
      logicArticle.categories.forEach((category) => {
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
