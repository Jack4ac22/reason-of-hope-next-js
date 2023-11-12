import {
  getArticlesByTag,
  getAllArticleTags,
  getAllArticles,
} from "./articles-functions.js";

export function getAllTagsCount() {
  const creationTags = getAllArticleTags("/content/creation");
  const logicTags = getAllArticleTags("/content/logic");
  const objectionTags = getAllArticleTags("/content/objections");
  const publicationTags = getAllArticleTags("/content/publications");
  const wordTags = getAllArticleTags("/content/word");

  const allTags = [];

  creationTags.forEach((creationTag) => {
    const foundTag = allTags.find((tag) => tag.tag === creationTag.tag);
    if (foundTag) {
      foundTag.count += creationTag.count;
    } else {
      allTags.push(creationTag);
    }
  });
  logicTags.forEach((logicTag) => {
    const foundTag = allTags.find((tag) => tag.tag === logicTag.tag);
    if (foundTag) {
      foundTag.count += logicTag.count;
    } else {
      allTags.push(logicTag);
    }
  });
  objectionTags.forEach((objectionTag) => {
    const foundTag = allTags.find((tag) => tag.tag === objectionTag.tag);
    if (foundTag) {
      foundTag.count += objectionTag.count;
    } else {
      allTags.push(objectionTag);
    }
  });
  publicationTags.forEach((publicationTag) => {
    const foundTag = allTags.find((tag) => tag.tag === publicationTag.tag);
    if (foundTag) {
      foundTag.count += publicationTag.count;
    } else {
      allTags.push(publicationTag);
    }
  });
  wordTags.forEach((wordTag) => {
    const foundTag = allTags.find((tag) => tag.tag === wordTag.tag);
    if (foundTag) {
      foundTag.count += wordTag.count;
    } else {
      allTags.push(wordTag);
    }
  });
  return allTags;
}

export function getAllTagsarticles() {
  const allCatWithArticles = [];
  const allTags = getAllTagsCount();

  allTags.forEach((tag) => {
    const creationArticlesByTag = getArticlesByTag(tag.tag, "/content/creation");
    const logicsArticlesByTag = getArticlesByTag(tag.tag, "/content/logic");
    const objectionsArticlesByTag = getArticlesByTag(tag.tag, "/content/objectios");
    const publicationsArticlesByTag = getArticlesByTag(tag.tag, "/content/publications");
    const wordsArticlesByTag = getArticlesByTag(tag.tag, "/content/word");

    const newTagObject = {
      tag: tag.tag,
      count: tag.count,
      // make sure to spread the articles based on their source (creation, objection, logic, publication, word)
      articles: {
        creation: [...creationArticlesByTag],
        objection: [...objectionsArticlesByTag],
        logic: [...logicsArticlesByTag],
        publication: [...publicationsArticlesByTag],
        word: [...wordsArticlesByTag],
      },
    };
    allCatWithArticles.push(newTagObject);
  });
  return allCatWithArticles;
}

export function getAllArticlesByTag(tag) {
  const creationArticlesByTag = getArticlesByTag(tag, "/content/creation");
  const logicsArticlesByTag = getArticlesByTag(tag, "/content/logic");
  const objectionsArticlesByTag = getArticlesByTag(tag, "/content/objections");
  const publicationsArticlesByTag = getArticlesByTag(tag, "/content/publications");
  const wordsArticlesByTag = getArticlesByTag(tag, "/content/word");
  const allArticles = {
    creation: {
      count: creationArticlesByTag.length,
      articles: [...creationArticlesByTag],
    },
    objection: {
      count: objectionsArticlesByTag.length,
      articles: [...objectionsArticlesByTag],
    },
    logic: {
      count: logicsArticlesByTag.length,
      articles: [...logicsArticlesByTag],
    },
    publication: {
      count: publicationsArticlesByTag.length,
      articles: [...publicationsArticlesByTag],
    },
    word: {
      count: wordsArticlesByTag.length,
      articles: [...wordsArticlesByTag],
    },
  };

  return allArticles;
}
