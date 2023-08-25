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

function orderWordsBy(words, orderBy) {
  try {
    return words.sort((wordA, wordB) =>
      wordA[orderBy] > wordB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return words;
  }
}

const wordsDirectory = path.join(process.cwd(), "content/word");

export function getWordsFiles() {
  return fs.readdirSync(wordsDirectory);
}

export function getWordData(wordIdentifier) {
  const wordSlug = wordIdentifier.replace(/\.md$/, "");
  const filePath = path.join(wordsDirectory, `${wordSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const wordData = {
    slug: wordSlug,
    ...data,
    content: content,
  };
  return wordData;
}

export function getAllWords(orderedBy = "date") {
  const wordFiles = getWordsFiles();
  const allWords = wordFiles.map((wordFile) => {
    return getWordData(wordFile);
  });

  return orderWordsBy(allWords, orderedBy);
}

export function getWordsByTag(tag = "") {
  return getAllWords().filter((word) => {
    if (word && word.tags) {
      return word.tags.includes(tag);
    }
    return false;
  });
}

export function getWordsByCategory(category = "") {
  return getAllWords().filter((word) => {
    if (word && word.categories) {
      // console.log("categories", word.categories);
      return word.categories.includes(category);
    }
    return false;
  });
}

export function getWordsBySearchTerm(searchTerm = "") {
  return getAllWords().filter((word) => {
    if (word && word.title) {
      return (
        word.title.includes(searchTerm) || word.content.includes(searchTerm)
      );
    }
    return false;
  });
}

export function getWordsByTitleSearch(searchTerm = "") {
  return getAllWords().filter((word) => {
    if (word && word.title) {
      return word.title.includes(searchTerm);
    }
    return false;
  });
}
// TODO: add counting of tags and categories

export function getAllWordsTags() {
  const allWordArticles = getAllWords();
  const allTags = [];
  allWordArticles.forEach((wordArticle) => {
    if (wordArticle && wordArticle.tags) {
      wordArticle.tags.forEach((tag) => {
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

export function getAllWordsCategories() {
  const allWordArticles = getAllWords();
  const allCategories = [];
  allWordArticles.forEach((wordArticle) => {
    if (wordArticle && wordArticle.categories) {
      wordArticle.categories.forEach((category) => {
        const categoryIndex = allCategories.findIndex(
          (categoryObject) => categoryObject.categor === category
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

import { remark } from "remark";
import html from "remark-html";

export async function getPostData(wordIdentifier) {
  const wordSlug = wordIdentifier.replace(/\.md$/, "");
  const filePath = path.join(wordsDirectory, `${wordSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug: wordSlug,
    contentHtml,
    ...matterResult.data,
  };
}
