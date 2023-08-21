import {
    getAllCreationsTags,
    getAllCreationArticles,
    getCreationArticlesByTag,
  } from "./creation-functions";
  import {
    getAllLogicsTags,
    getAllLogics,
    getLogicsByTag,
  } from "./logic-functions.js";
  import {
    getAllObjectionsTags,
    getAllObjections,
    getObjectionsByTag,
  } from "./objections-functions.js";
  import {
    getAllPublicationsTags,
    getAllPublications,
    getPublicationsByTag,
  } from "./publications-functions.js";
  import {
    getAllWords,
    getWordsByTag,
    getAllWordsTags,
  } from "./word-functions.js";
  
  export function getAllTagsCount() {
    const creationTags = getAllCreationsTags();
  
    const logicTags = getAllLogicsTags();
  
    const objectionTags = getAllObjectionsTags();
  
    const publicationTags = getAllPublicationsTags();
  
    const wordTags = getAllWordsTags();
  
    const allTags = [];
  
    creationTags.forEach((creationTag) => {
      const foundTag = allTags.find(
        (tag) => tag.tag === creationTag.tag
      );
      if (foundTag) {
        foundTag.count += creationTag.count;
      } else {
        allTags.push(creationTag);
      }
    });
    logicTags.forEach((logicTag) => {
      const foundTag = allTags.find(
        (tag) => tag.tag === logicTag.tag
      );
      if (foundTag) {
        foundTag.count += logicTag.count;
      } else {
        allTags.push(logicTag);
      }
    });
    objectionTags.forEach((objectionTag) => {
      const foundTag = allTags.find(
        (tag) => tag.tag === objectionTag.tag
      );
      if (foundTag) {
        foundTag.count += objectionTag.count;
      } else {
        allTags.push(objectionTag);
      }
    });
    publicationTags.forEach((publicationTag) => {
      const foundTag = allTags.find(
        (tag) => tag.tag === publicationTag.tag
      );
      if (foundTag) {
        foundTag.count += publicationTag.count;
      } else {
        allTags.push(publicationTag);
      }
    });
    wordTags.forEach((wordTag) => {
      const foundTag = allTags.find(
        (tag) => tag.tag === wordTag.tag
      );
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
      const creationArticlesByTag = getCreationArticlesByTag(
        tag.tag
      );
      const objectionsArticlesByTag = getObjectionsByTag(
        tag.tag
      );
      const logicsArticlesByTag = getLogicsByTag(tag.tag);
      const publicationsArticlesByTag = getPublicationsByTag(
        tag.tag
      );
      const wordsArticlesByTag = getWordsByTag(tag.tag);
  
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
        }
      };
      allCatWithArticles.push(newTagObject);
    });
    return allCatWithArticles;
  }
  
  export function getArticlesByTag(tag) {
    const creationArticlesByTag = getCreationArticlesByTag(tag);
    const objectionsArticlesByTag = getObjectionsByTag(tag);
    const logicsArticlesByTag = getLogicsByTag(tag);
    const publicationsArticlesByTag = getPublicationsByTag(tag);
    const wordsArticlesByTag = getWordsByTag(tag);
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
  