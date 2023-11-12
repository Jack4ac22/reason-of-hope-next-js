import {
  getAllArticles,
  getAllArticleCategories,
  getArticlesByCategory,
} from "./articles-functions.js";

export function getAllCategoriesCount() {
  const creationCategories = getAllArticleCategories("/content/creation");
  const logicCategories = getAllArticleCategories("/content/logic");
  const objectionCategories = getAllArticleCategories("/content/objections");
  const publicationCategories = getAllArticleCategories("/content/publications");
  const wordCategories = getAllArticleCategories("/content/word");

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
    const creationArticlesByCategory = getArticlesByCategory(category.category,"/content/creation");
    const logicsArticlesByCategory = getArticlesByCategory(category.category,"/content/logic");
    const objectionsArticlesByCategory = getArticlesByCategory(category.category,"/content/objections");
    const publicationsArticlesByCategory = getArticlesByCategory(category.category,"/content/publications");
    const wordsArticlesByCategory = getArticlesByCategory(category.category,"/content/word");

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
      },
    };
    allCatWithArticles.push(newCategoryObject);
  });
  return allCatWithArticles;
}

export function getAllArticlesByCategory(category) {
  const creationArticlesByCategory = getArticlesByCategory(category,"/content/creation");
  const logicsArticlesByCategory = getArticlesByCategory(category,"/content/logic");
  const objectionsArticlesByCategory = getArticlesByCategory(category,"/content/objections");
  const publicationsArticlesByCategory = getArticlesByCategory(category,"/content/publications");
  const wordsArticlesByCategory = getArticlesByCategory(category,"/content/word");
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
