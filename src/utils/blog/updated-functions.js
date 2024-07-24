import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectoryPath = [
  "creation",
  "logic",
  "objections",
  "publications",
  "word",
  "biblical-studies",
];

/**
 * Retrieves the list of article files from the specified directory.
 *
 * @param {string} articlesDirectoryPath - The path to the directory containing the article files.
 * @returns {string[]} - An array of article file names.
 */
export function getArticleFiles(articlesDirectoryPath) {
  const articlesDirectory = path.join(process.cwd(), articlesDirectoryPath);
  return fs.readdirSync(articlesDirectory);
}

/**
 * Retrieves the data of an article based on its identifier.
 * @param {string} articleIdentifier - The identifier of the article.
 * @param {string} articlesDirectoryPath - The path to the directory containing the articles.
 * @returns {Object} - The article data.
 */
export function getArticleData(articleIdentifier, articlesDirectoryPath) {
  const articleSlug = articleIdentifier.replace(/\.md$/, "");
  const filePath = path.join(
    process.cwd(),
    articlesDirectoryPath,
    `${articleSlug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const dateInformations = data.date.split("-");
  const articleDateInformations = {
    year: dateInformations[0],
    month: dateInformations[1],
    day: dateInformations[2],
  };
  const isBook = articlesDirectoryPath.includes("publications");
  const featured = data.featured ? data.featured : false;
  const articleData = {
    slug: articleSlug,
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
 * Retrieves all articles data.
 * @returns {Promise<Array>} The array of articles data.
 */
export function allArticlesData() {
  const jsonFilePath = path.join(process.cwd(), "/src/assets/blog/articles.json");
  if (
    !fs.existsSync(jsonFilePath) ||
    JSON.parse(fs.readFileSync(jsonFilePath)).length === 0
  ) {
    let articlesInJson = [];
    articlesDirectoryPath.map((directory) => {
      const articleFiles = getArticleFiles(`/src/assets/blog/blog-articles/${directory}`);
      const articles = articleFiles.map((articleFile) => {
        return getArticleData(articleFile, `/src/assets/blog/blog-articles/${directory}`);
      });
      const publishedArticles = articles.filter(
        (article) => article.status === "published"
      );
      publishedArticles.length > 0
        ? (articlesInJson = [...articlesInJson, ...articles])
        : null;
    });
    fs.writeFileSync(jsonFilePath, JSON.stringify(articlesInJson));
    return articlesInJson;
  } else {
    // read  the file and return its content
    const fileContent = fs.readFileSync(jsonFilePath, "utf-8");
    const articlesInJson = JSON.parse(fileContent);
    return articlesInJson;
  }
}

/**
 * Retrieves the available years of articles in ascending or descending order.
 * @param {string} order - The order in which the years should be sorted. Possible values are "asc" (ascending) or "desc" (descending). Default is "asc".
 * @returns {Promise<number[]>} An array of available years.
 */
export  function availableYears(order = "asc") {
  let articles =  allArticlesData();
  let years = articles.map((article) => article.year);
  years = [...new Set(years)];
  years.sort((a, b) => (order === "desc" ? b - a : a - b));
  return years;
}

/**
 * Retrieves articles data for a specific year.
 *
 * @param {number, string} year - The year for which to retrieve articles data.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles data for the specified year.
 */
export  function yearData(year) {
  let articles =  allArticlesData();
  articles = articles.filter((article) => article.year === year.toString());
  return articles;
}

/**
 * Retrieves the available months for a given year from the articles data.
 * @param {number, string} year - The year for which to retrieve the available months.
 * @param {string} [order="asc"] - The order in which the months should be sorted. Defaults to "asc".
 * @returns {Promise<Array<number>>} - A promise that resolves to an array of available months.
 */
export  function availableMonths(year, order = "asc") {
  let articles =  allArticlesData();
  articles = articles.filter((article) => article.year === year.toString());
  let months = articles.map((article) => article.month);
  months = [...new Set(months)];
  months.sort((a, b) => (order === "desc" ? b - a : a - b));
  return months;
}

/**
 * Retrieves articles data for a specific month and year.
 *
 * @param {number} year - The year of the articles.
 * @param {number} month - The month of the articles.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles.
 */
export  function monthData(year, month) {
  let articles =  allArticlesData();
  articles = articles.filter(
    (article) =>
      article.year === year.toString() && article.month === month.toString()
  );
  return articles;
}

/**
 * Retrieves the available days for a given year and month.
 * @param {number} year - The year.
 * @param {number} month - The month.
 * @param {string} [order="asc"] - The order in which the days should be sorted. Defaults to "asc".
 * @returns {Promise<number[]>} - An array of available days.
 */
export  function availableDays(year, month, order = "asc") {
  let articles =  allArticlesData();
  articles = articles.filter(
    (article) =>
      article.year === year.toString() && article.month === month.toString()
  );
  let days = articles.map((article) => article.day);
  days = [...new Set(days)];
  days.sort((a, b) => (order === "desc" ? b - a : a - b));
  return days;
}
/**
 * Retrieves articles for a specific day.
 *
 * @param {number} year - The year of the articles.
 * @param {number} month - The month of the articles.
 * @param {number} day - The day of the articles.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles.
 */
export  function dayData(year, month, day) {
  let articles =  allArticlesData();
  articles = articles.filter(
    (article) =>
      article.year === year.toString() &&
      article.month === month.toString() &&
      article.day === day.toString()
  );
  return articles;
}

/**
 * Retrieves the available slugs for articles published on a specific date.
 * @param {number} year - The year of the articles.
 * @param {number} month - The month of the articles.
 * @param {number} day - The day of the articles.
 * @param {string} [order="asc"] - The order in which the slugs should be sorted. Defaults to "asc".
 * @returns {Promise<string[]>} - An array of unique slugs for the articles.
 */
export  function availableSlugs(year, month, day, order = "asc") {
  let articles =  allArticlesData();
  articles = articles.filter(
    (article) =>
      article.year === year.toString() &&
      article.month === month.toString() &&
      article.day === day.toString()
  );
  let slugs = articles.map((article) => article.slug);
  slugs = [...new Set(slugs)];
  slugs.sort((a, b) => (order === "desc" ? b - a : a - b));
  return slugs;
}

/**
 * Retrieves the full path data for an article based on the provided parameters.
 *
 * @param {number} year - The year of the article.
 * @param {number} month - The month of the article.
 * @param {number} day - The day of the article.
 * @param {string} slug - The slug of the article.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles matching the provided parameters.
 */
export  function fullPathData(year, month, day, slug) {
  let articles =  allArticlesData();
  articles = articles.filter(
    (article) =>
      article.year === year.toString() &&
      article.month === month.toString() &&
      article.day === day.toString() &&
      article.slug === slug
  );
  return articles;
}

/**
 * Retrieves article data based on the provided slug.
 *
 * @param {string} slug - The slug of the article.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles matching the provided slug.
 */
export  function articleData(slug) {
  slug = slug.trim();
  let articles =  allArticlesData();
  articles = articles.filter((article) => article.slug === slug.toString());
  return articles;
}

/**
 * Retrieves the available tags from all articles data.
 * @param {string} order - The order in which the tags should be sorted. Defaults to "asc".
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of unique tags.
 */
export  function availableTags(order = "asc") {
  let articles =  allArticlesData();
  let availableTags = articles.map((article) => article.tags);
  let tags = articles.map((article) => article.tags);
  availableTags = [...tags, ...availableTags];
  availableTags = availableTags.flat();
  availableTags = [...new Set(availableTags)];
  availableTags.sort((a, b) => (order === "desc" ? b - a : a - b));
  return availableTags;
}

/**
 * Retrieves the available tags with their respective count of articles.
 * @returns {Promise<Array<{tag: string, count: number}>>} The array of tags with their respective count.
 */
export  function availableTagsWithCount() {
  let articles =  allArticlesData();
  let allTags =  availableTags();
  let tagsWithCount = allTags.map((tag) => {
    let count = articles.filter((article) => article.tags.includes(tag)).length;
    return { tag: tag, count: count };
  });
  return tagsWithCount;
}

/**
 * Retrieves articles that have a specific tag.
 *
 * @param {string} tag - The tag to filter articles by.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles.
 */
export  function articlesByTag(tag) {
  tag = tag.trim();
  let articles =  allArticlesData();
  articles = articles.filter((article) => article.tags.includes(tag));
  return articles;
}

/**
 * Retrieves articles based on the provided tags.
 * @param {string[]} tags - An array of tags to filter the articles by.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of articles matching the provided tags.
 */
export  function articlesByTags(tags) {
  let articles =  allArticlesData();
  articles = articles.filter((article) => {
    return tags.every((tag) => article.tags.includes(tag));
  });
  return articles;
}

/**
 * Retrieves the available categories from the articles data.
 * @returns {Promise<string[]>} An array of unique category names.
 */
export  function availableCategories() {
  let articles =  allArticlesData();
  let categories = articles.map((article) => article.categories);
  categories = categories.flat();
  categories = [...new Set(categories)];
  return categories;
}

/**
 * Retrieves the available categories with their respective article counts.
 * @returns {Promise<Array<{category: string, count: number}>>} An array of objects containing the category name and the count of articles in that category.
 */
export  function availableCategoriesWithCount() {
  let articles =  allArticlesData();
  let allCategories =  availableCategories();
  let categoriesWithCount = allCategories.map((category) => {
    let count = articles.filter((article) =>
      article.categories.includes(category)
    ).length;
    return { category: category, count: count };
  });
  return categoriesWithCount;
}

/**
 * Retrieves articles by category.
 *
 * @param {string} category - The category to filter articles by.
 * @returns {Promise<Array>} - A promise that resolves to an array of articles.
 */
export  function articlesByCategory(category) {
  category = category.trim();
  let articles =  allArticlesData();
  articles = articles.filter((article) =>
    article.categories.includes(category)
  );
  return articles;
}

/**
 * Retrieves articles filtered by categories.
 *
 * @param {string[]} categories - An array of category names.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of articles.
 */
export  function articlesByCategories(categories) {
  let articles =  allArticlesData();
  articles = articles.filter((article) => {
    return categories.every((category) =>
      article.categories.includes(category)
    );
  });
  return articles;
}
