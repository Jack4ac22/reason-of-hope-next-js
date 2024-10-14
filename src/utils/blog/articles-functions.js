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
      "devotions",
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
  assetsFolder = articlesFolder,
  reduced = false
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
  const dateInformations = data?.date?.split("-");
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
  };
  if (!reduced) {
    articleData.content = content;
  }
  return articleData;
}

/**
 * Retrieves the data for all articles.
 *
 * @param {boolean} [reduced=false] - Determines whether to retrieve reduced (summary) data for each article.
 * @returns {Array<Object>} An array of article data objects.
 */
export function getAllArticlesData(reduced = false) {
  let allArticles = [];
  const articles = getArticlesList();
  articles.map((article) => {
    const articleData = getSingleArticleData(
      article.directory,
      article.fileName,
      articlesFolder,
      reduced
    );
    allArticles.push(articleData);
  });
  return allArticles;
}

/**
 * Retrieves a list of related articles based on the categories and tags of the given article.
 *
 * @param {Object} article - The article object containing categories and tags.
 * @param {number} [number=5] - The number of related articles to retrieve. Defaults to 5.
 * @returns {Array} - An array of related articles.
 */
export function getRelatedArticles(article, number = 5) {
  let relatedArticles = [];

  // Collect articles by categories
  if (Array.isArray(article.categories)) {
    article.categories.forEach((category) => {
      const articlesByCategory = getArticlesByCategory(category);
      relatedArticles.push(...articlesByCategory);
    });
  }

  // Collect articles by tags
  if (Array.isArray(article.tags)) {
    article.tags.forEach((tag) => {
      const articlesByTag = getArticlesByTag(tag);
      relatedArticles.push(...articlesByTag);
    });
  }

  // Remove duplicates based on slug
  const uniqueArticlesMap = {};
  relatedArticles.forEach((relatedArticle) => {
    uniqueArticlesMap[relatedArticle.slug] = relatedArticle;
  });
  let uniqueArticles = Object.values(uniqueArticlesMap);

  // Remove the current article from the list
  uniqueArticles = uniqueArticles.filter(
    (relatedArticle) => relatedArticle.slug !== article.slug
  );

  // Check if we have enough related articles
  if (uniqueArticles.length < 3) {
    let randomArticles = getAllArticlesData(true).filter(
      (relatedArticle) => relatedArticle.slug !== article.slug
    );
    randomArticles = shuffleArray(randomArticles);
    return randomArticles.slice(0, number);
  } else {
    const shuffledArticles = shuffleArray(uniqueArticles);
    return shuffledArticles.slice(0, number);
  }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

/**
 * ############################
 * ### Categories functions ###
 * ############################
 */

export function getCategoriesList() {
  const articles = getAllArticlesData(true);
  const categoriesSet = new Set();
  articles.forEach((article) => {
    article.categories.forEach((category) => categoriesSet.add(category));
  });
  return Array.from(categoriesSet);
}

/**
 * Retrieves all categories with their respective article counts and associated articles.
 *
 * @returns {Array<Object>} An array of objects where each object represents a category
 * with the following properties:
 * - `title` {string}: The category title.
 * - `count` {number}: The number of articles in the category.
 * - `articles` {Array<Object>}: An array of articles belonging to the category.
 */
export function getAllCategoriesWithCount() {
  const articles = getAllArticlesData(true);

  // Use a Map to store category counts and associated articles
  const categoryMap = new Map();

  // Traverse each article and update the category count and articles in the Map
  articles.forEach((article) => {
    article.categories.forEach((category) => {
      // If category exists in the map, update count and add the article
      if (categoryMap.has(category)) {
        const categoryData = categoryMap.get(category);
        categoryData.count += 1;
        categoryData.articles.push(article);
      } else {
        // Initialize the category with count 1 and current article
        categoryMap.set(category, { count: 1, articles: [article] });
      }
    });
  });

  // Convert the Map into an array of objects with category title, count, and articles
  const categoriesWithCount = Array.from(categoryMap, ([title, data]) => ({
    title,
    count: data.count,
    articles: data.articles,
  }));
  return categoriesWithCount;
}

/**
 * Retrieves articles that belong to a specific category.
 *
 * @param {string} category - The category to filter articles by.
 * @returns {Object[]} An array of articles that belong to the specified category.
 */
export function getArticlesByCategory(category) {
  const articles = getAllArticlesData(true);
  const decodedCategory = decodeURIComponent(category);
  let articlesByCategory = [];
  articles.forEach((article) => {
    article.categories.forEach((cat) => {
      if (cat === decodedCategory) {
        articlesByCategory.push(article);
      }
    });
  });

  return articlesByCategory;
}

/**
 * ######################
 * ### Tags functions ###
 * ######################
 */

/**
 * Retrieves a list of unique tags from all articles.
 *
 * This function iterates through all the articles and extracts their tags.
 * It uses a Set to store unique tags, ensuring that no duplicates are included.
 * Finally, it converts the Set back to an array and returns it.
 *
 * @returns {string[]} An array of unique tags sorted alphabetically.
 *
 * @example
 * // Sample usage:
 * const uniqueTags = getTagsList();
 * console.log(uniqueTags); // Output: ['JavaScript', 'Next.js', 'React', 'Web Development']
 *
 */
export function getTagsList() {
  const articles = getAllArticlesData(true);

  // Use a Set to store unique tags
  const uniqueTagsSet = new Set();

  // Traverse each article and add its tags to the Set
  articles.forEach((article) => {
    article.tags?.forEach((tag) => uniqueTagsSet.add(tag));
  });

  // Convert the Set back to an array and sort alphabetically
  return Array.from(uniqueTagsSet).sort((a, b) => a.localeCompare(b));
}

export function getAllTagsWithCount() {
  const articles = getAllArticlesData(true);

  // Use a Map to store tag counts and associated articles
  const tagMap = new Map();

  // Traverse each article and update the tag count and articles in the Map
  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      // If tag exists in the map, update count and add the article
      if (tagMap.has(tag)) {
        const tagData = tagMap.get(tag);
        tagData.count += 1;
        tagData.articles.push(article);
      } else {
        // Initialize the tag with count 1 and current article
        tagMap.set(tag, { count: 1, articles: [article] });
      }
    });
  });

  // Convert the Map into an array of objects with tag title, count, and articles
  const tagsWithCount = Array.from(tagMap, ([title, data]) => ({
    title,
    count: data.count,
    articles: data.articles,
  }));

  return tagsWithCount;
}

/**
 * Retrieves a list of articles by tag.
 * @param {string} tag - The tag of the articles.
 * @returns {Array} An array of article objects.
 */
export function getArticlesByTag(tag) {
  const articles = getAllArticlesData(true);
  const decodedTag = decodeURIComponent(tag);
  let articlesByTag = [];
  articles.forEach((article) => {
    article.tags.forEach((t) => {
      if (t === decodedTag) {
        articlesByTag.push(article);
      }
    });
  });
  return articlesByTag;
}
