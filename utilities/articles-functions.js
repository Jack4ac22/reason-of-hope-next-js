import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getArticlesByTagComined } from "./tags-functions";
import { randomArticlesFromArray } from "./general-functions";
import { all } from "remark-rehype";

function consoleLog(message) {
  console.log("****************************************");
  console.log("****************************************");
  console.log(message);
  console.log("****************************************");
  console.log("****************************************");
}

function orderArticlesBy(articles, orderBy) {
  try {
    return articles.sort((articleA, articleB) =>
      articleA[orderBy] > articleB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return articles;
  }
}

export function getArticleFiles(articlesDirectoryPath) {
  const articlesDirectory = path.join(process.cwd(), articlesDirectoryPath);
  return fs.readdirSync(articlesDirectory);
}

export function getArticleData(articleIdentifier, articlesDirectoryPath) {
  const articleSlug = articleIdentifier.replace(/\.md$/, "");
  const filePath = path.join(
    process.cwd(),
    articlesDirectoryPath,
    `${articleSlug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const articleData = {
    slug: articleSlug,
    ...data,
    content: content,
  };
  return articleData;
}

export function getArticleDataWithRelatedArticles(
  articleIdentifier,
  articlesDirectoryPath,
  related = 3
) {
  const articleSlug = articleIdentifier.replace(/\.md$/, "");
  const filePath = path.join(
    process.cwd(),
    articlesDirectoryPath,
    `${articleSlug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const relatedArticles = getRelatedArticles(
    data.tags,
    related,
    articleIdentifier
  );
  const articleData = {
    slug: articleSlug,
    related: relatedArticles,
    ...data,
    content: content,
  };
  return articleData;
}

export function getAllArticles(articlesDirectoryPath, orderedBy = "date") {
  const articleFiles = getArticleFiles(articlesDirectoryPath);
  const allArticles = articleFiles.map((articleFile) => {
    return getArticleData(articleFile, articlesDirectoryPath);
  });

  return orderArticlesBy(allArticles, orderedBy);
}

/**
 * Retrieves all blog articles from different content directories.
 *
 * @returns {Array} An array of all blog articles.
 */
export function getAllBlogArticles() {
  const creationArticles = getAllArticles("/content/creation");
  const logicArticles = getAllArticles("/content/logic");
  const objectionArticles = getAllArticles("/content/objections");
  const publicationArticles = getAllArticles("/content/publications");
  const wordArticles = getAllArticles("/content/word");
  const studiesArticles = getAllArticles("/content/biblical-studies");

  const adjustedCreationArticles = creationArticles.map((article) => {
    return { ...article, slug: "creation/" + article.slug };
  });
  const adjustedLogicArticles = logicArticles.map((article) => {
    return { ...article, slug: "logic/" + article.slug };
  });
  const adjustedObjectionArticles = objectionArticles.map((article) => {
    return { ...article, slug: "objections/" + article.slug };
  });
  const adjustedPublicationArticles = publicationArticles.map((article) => {
    return { ...article, slug: "publications/" + article.slug };
  });
  const adjustedWordArticles = wordArticles.map((article) => {
    return { ...article, slug: "words/" + article.slug };
  });
  const adjustedStudiesArticles = studiesArticles.map((article) => {
    return { ...article, slug: "studies/" + article.slug };
  });

  const allArticles = [
    ...adjustedCreationArticles,
    ...adjustedLogicArticles,
    ...adjustedObjectionArticles,
    ...adjustedPublicationArticles,
    ...adjustedWordArticles,
    ...adjustedStudiesArticles,
  ];

  return allArticles;
}

export function getArticlesByTag(
  tag = "",
  articlesDirectoryPath,
  orderedBy = "date"
) {
  return orderArticlesBy(
    getAllArticles(articlesDirectoryPath).filter((article) => {
      if (article && article.tags) {
        return article.tags.includes(tag);
      }
      return false;
    }),
    orderedBy
  );
}

export function getArticlesByCategory(
  category = "",
  articlesDirectoryPath,
  orderedBy = "date"
) {
  return orderArticlesBy(
    getAllArticles(articlesDirectoryPath).filter((article) => {
      if (article && article.categories) {
        return article.categories.includes(category);
      }
      return false;
    }),
    orderedBy
  );
}

export function getArticlesBySearchTerm(
  searchTerm = "",
  articlesDirectoryPath,
  orderedBy = "date"
) {
  return orderArticlesBy(
    getAllArticles(articlesDirectoryPath).filter((article) => {
      if (article && article.title) {
        return (
          article.title.includes(searchTerm) ||
          article.content.includes(searchTerm)
        );
      }
      return false;
    }),
    orderedBy
  );
}

export function getArticlesByTitleSearch(
  searchTerm = "",
  articlesDirectoryPath,
  orderedBy = "date"
) {
  return orderArticlesBy(
    getAllArticles(articlesDirectoryPath).filter((article) => {
      if (article && article.title) {
        return article.title.includes(searchTerm);
      }
      return false;
    }),
    orderedBy
  );
}

export function getAllArticleTags(articlesDirectoryPath) {
  const allArticles = getAllArticles(articlesDirectoryPath);
  const allTags = [];
  allArticles.forEach((article) => {
    if (article && article.tags) {
      article.tags.forEach((tag) => {
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

export function getAllArticleCategories(articlesDirectoryPath) {
  const allArticles = getAllArticles(articlesDirectoryPath);
  const allCategories = [];
  allArticles.forEach((article) => {
    if (article && article.categories) {
      article.categories.forEach((category) => {
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

export function getRelatedArticles(tags, number = 3, articleSlug = "") {
  const relatedArticles = [];
  const allArticles = getAllBlogArticles();
  tags.forEach((tag) => {
    const filteredArticles = allArticles.filter(
      (article) =>
        article.tags &&
        article.tags.includes(tag) &&
        article.slug !== articleSlug
    );
    relatedArticles.push(...filteredArticles);
  });
  return randomArticlesFromArray(relatedArticles, number);
}
