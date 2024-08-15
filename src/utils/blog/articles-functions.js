import path from "path";
import fs from "fs";
import matter from "gray-matter";

/**
 * ##########################
 * ### Articles functions ###
 * ##########################
 */

const articlesFolder = "/src/assets/blog/blog-articles";
const pagesFolder = "/src/assets/blog/blog-pages";

/**
 * Retrieves the directories of articles from the specified content folder.
 * @param {string} contentFolder - The path to the content folder containing the articles.
 * @returns {string[]} - An array of directory paths for the articles.
 */
export function getArticlesDirectories(contentFolder = articlesFolder) {
  try {
    const articlesDirectory = path.join(process.cwd(), contentFolder);
    const articlesDirectoryPaths = fs.readdirSync(articlesDirectory);
    return articlesDirectoryPaths;
  } catch (error) {
    console.error("Error in getArticlesDirectories function: ", error.stack);
    return [
      "creation",
      "logic",
      "objections",
      "publications",
      "word",
      "biblical-studies",
    ];
  }
}

/**
 * Retrieves a list of articles.
 * @returns {Array} An array of article objects containing the directory and file name.
 */
export const getArticlesList = () => {
  const articlesDirectoryPaths = getArticlesDirectories();
  let articles = [];
  articlesDirectoryPaths.map((directory) => {
    const articlePath = path.join(process.cwd(), articlesFolder, directory);
    const fileNames = fs.readdirSync(articlePath);
    fileNames.map((fileName) => {
      articles.push({ directory: directory, fileName: fileName });
    });
    articles = [...articles];
  });
  articles = articles.map((article) => {
    const { directory, fileName } = article;
    const newFileName = fileName.replace(/\.(md|mdx)$/, "");
    return { directory, fileName: newFileName };
  });
  return articles;
};

/**
 * Retrieves data for a single article.
 *
 * @param {string} articleDirectory - The directory where the article is located.
 * @param {string} articleFileName - The filename of the article.
 * @param {string} [assetsFolder=articlesFolder] - The folder where the assets are located.
 * @returns {Object} - The data for the article.
 */
export function getSingleArticleData(
  articleDirectory,
  articleFileName,
  assetsFolder = articlesFolder
) {
  if (!articleFileName.endsWith(".md")) {
    articleFileName += ".md";
  }
  let folder = "";
  assetsFolder === "pagesFolder"
    ? (folder = pagesFolder)
    : (folder = articlesFolder);
  const articlePath = path.join(
    process.cwd(),
    folder,
    articleDirectory,
    articleFileName
  );
  const articleSlug = articleFileName.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(articlePath, "utf-8");
  const { data, content } = matter(fileContent);
  const dateInformations = data.date.split("-");
  const articleDateInformations = {
    year: dateInformations[0],
    month: dateInformations[1],
    day: dateInformations[2],
  };
  const isBook = articleDirectory.includes("publications");
  const featured = data?.featured ? data.featured : false;
  const articleData = {
    slug: articleSlug,
    directory: articleDirectory,
    year: articleDateInformations.year,
    month: articleDateInformations.month,
    day: articleDateInformations.day,
    isBook: isBook,
    featured: featured,
    ...data,
    content: content,
  };
  return articleData;
}

/**
 * Retrieves data for all articles.
 * @returns {Array} An array containing data for all articles.
 */
export function getAllArticlesData() {
  let allArticles = [];
  const articles = getArticlesList();
  articles.map((article) => {
    const articleData = getSingleArticleData(
      article.directory,
      article.fileName
    );
    allArticles.push(articleData);
  });
  return allArticles;
}

/**
 * ############################
 * ### Categories functions ###
 * ############################
 */

/**
 * Retrieves all categories with their respective count from the articles data.
 * @returns {Array} An array of objects containing the category and its count.
 */
export function getAllCategoriesWithCount() {
  const articles = getAllArticlesData();
  let allCategories = [];
  articles.map((article) => {
    const { category } = article;
    allCategories.push(category);
  });
  const uniqueCategories = allCategories.filter(onlyUnique);
  let categoriesWithCount = [];
  uniqueCategories.map((category) => {
    const categoryCount = allCategories.filter(
      (cat) => cat === category
    ).length;
    categoriesWithCount.push({ category: category, count: categoryCount });
  });
  return categoriesWithCount;
}

/**
 * Retrieves a list of articles by category.
 * @param {string} category - The category of the articles.
 * @returns {Array} An array of article objects.
 */
/**
 */ export function getArticlesByCategory(category) {
  const articles = getAllArticlesData();
  const articlesByCategory = articles.filter((article) => {
    return article.category === category;
  });
  return articlesByCategory;
}

/**
 * ######################
 * ### Tags functions ###
 * ######################
 */

export function getAllTagsWithCount() {
  const allArticles = getAllArticlesData();
  let allTags = [];
  allArticles.map((article) => {
    const { tags } = article;
    tags.map((tag) => {
      allTags.push(tag);
    });
  });
  const uniqueTags = allTags.filter(onlyUnique);
  let tagsWithCount = [];
  uniqueTags.map((tag) => {
    const tagCount = allTags.filter((t) => t === tag).length;
    tagsWithCount.push({ tag: tag, count: tagCount });
  });
  return tagsWithCount;
}
