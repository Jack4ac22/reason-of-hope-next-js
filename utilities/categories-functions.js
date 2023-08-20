import {
  getAllCreationsCategories,
  getAllCreationArticles,
  getCreationArticlesByCategory,
} from "./creation-functions";
import {
  getAllLogicsCategories,
  getAllLogics,
  getLogicsByCategory,
} from "./logic-functions.js";
import {
  getAllObjectionsCategories,
  getAllObjections,
  getObjectionsByCategory,
} from "./objections-functions.js";
import {
  getAllPublicationsCategories,
  getAllPublications,
  getPublicationsByCategory,
} from "./publications-functions.js";
import {
  getAllWords,
  getWordsByCategory,
  getAllWordsCategories,
} from "./word-functions.js";

export function getAllCategoriesCount() {
  const creationCategories = getAllCreationsCategories();

  const logicCategories = getAllLogicsCategories();

  const objectionCategories = getAllObjectionsCategories();

  const publicationCategories = getAllPublicationsCategories();

  const wordCategories = getAllWordsCategories();

  const allCategories = [];

  creationCategories.forEach((creationCategory) => {
    const foundCategory = allCategories.find(
      (category) => category.category === creationCategory.category
    );
    if (foundCategory) {
      foundCategory.count += creationCategory.count;
    } else {
      allCategories.push(creationCategory);
    }
  });
  logicCategories.forEach((logicCategory) => {
    const foundCategory = allCategories.find(
      (category) => category.category === logicCategory.category
    );
    if (foundCategory) {
      foundCategory.count += logicCategory.count;
    } else {
      allCategories.push(logicCategory);
    }
  });
  objectionCategories.forEach((objectionCategory) => {
    const foundCategory = allCategories.find(
      (category) => category.category === objectionCategory.category
    );
    if (foundCategory) {
      foundCategory.count += objectionCategory.count;
    } else {
      allCategories.push(objectionCategory);
    }
  });
  publicationCategories.forEach((publicationCategory) => {
    const foundCategory = allCategories.find(
      (category) => category.category === publicationCategory.category
    );
    if (foundCategory) {
      foundCategory.count += publicationCategory.count;
    } else {
      allCategories.push(publicationCategory);
    }
  });
  wordCategories.forEach((wordCategory) => {
    const foundCategory = allCategories.find(
      (category) => category.category === wordCategory.category
    );
    if (foundCategory) {
      foundCategory.count += wordCategory.count;
    } else {
      allCategories.push(wordCategory);
    }
  });
  return allCategories;
}

export function getAllCategoriesarticles() {
  const allCatWithArticles = [];
  const allCategories = getAllCategoriesCount();

  allCategories.forEach((category) => {
    const creationArticlesByCategory = getCreationArticlesByCategory(
      category.category
    );
    const objectionsArticlesByCategory = getObjectionsByCategory(
      category.category
    );
    const logicsArticlesByCategory = getLogicsByCategory(category.category);
    const publicationsArticlesByCategory = getPublicationsByCategory(
      category.category
    );
    const wordsArticlesByCategory = getWordsByCategory(category.category);

    const newCategoryObject = {
      category: category.category,
      count: category.count,
      // make sure to spread the articles based on their source (creation, objection, logic, publication, word)
      articles: {
        creation: [...creationArticlesByCategory],
        objection: [...objectionsArticlesByCategory],
        logic: [...logicsArticlesByCategory],
        publication: [...publicationsArticlesByCategory],
        word: [...wordsArticlesByCategory],
      }
    };
    allCatWithArticles.push(newCategoryObject);
  });
  return allCatWithArticles;
}

export function getArticlesByCategory(category) {
  const creationArticlesByCategory = getCreationArticlesByCategory(category);
  const objectionsArticlesByCategory = getObjectionsByCategory(category);
  const logicsArticlesByCategory = getLogicsByCategory(category);
  const publicationsArticlesByCategory = getPublicationsByCategory(category);
  const wordsArticlesByCategory = getWordsByCategory(category);
  const allArticles = {
    creation: {
      count: creationArticlesByCategory.length,
      articles: [...creationArticlesByCategory],
    },
    objection: {
      count: objectionsArticlesByCategory.length,
      articles: [...objectionsArticlesByCategory],
    },
    logic: {
      count: logicsArticlesByCategory.length,
      articles: [...logicsArticlesByCategory],
    },
    publication: {
      count: publicationsArticlesByCategory.length,
      articles: [...publicationsArticlesByCategory],
    },
    word: {
      count: wordsArticlesByCategory.length,
      articles: [...wordsArticlesByCategory],
    },
  };

  return allArticles;
}
