import { get } from "http";
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

export function getAllCategoriesCount() {
  const creationCategories = getAllCreationsCategories();
  //   console.log("CREATION CATS:   ", creationCategories);
  const logicCategories = getAllLogicsCategories();

  const objectionCategories = getAllObjectionsCategories();

  const publicationCategories = getAllPublicationsCategories();
  //   console.log("PUBLICATION CATS:   ", publicationCategories);

  const allCategories = [];
  //   loop through all categories and add them to allCategories check if they exist first, if they do , add the count to the found count
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
  console.log("ALL CATS1:   ", allCategories);
  return allCategories;
}

export function getAllCategoriesarticles() {
  const allCatWithArticles = [];
  const allCategories = getAllCategoriesCount();
  allCategories.forEach((category) => {
    console.log("CAT:   ", category);
    const categoryCreationArticles = getCreationArticlesByCategory(category.category);
    console.log("CAT CREATION ARTICLES:   ", categoryCreationArticles);
    const categoryLogicArticles = getLogicsByCategory(category.category);
    const categoryObjectionArticles = getObjectionsByCategory(category.category);
    const categoryPublicationArticles = getPublicationsByCategory(category.category);
    const categoryWithArticles = {
      ...category,
      creationArticles: categoryCreationArticles,
      logicArticles: categoryLogicArticles,
      objectionArticles: categoryObjectionArticles,
      publicationArticles: categoryPublicationArticles,
    };
    allCatWithArticles.push(categoryWithArticles);
  });
  return allCatWithArticles;
}
