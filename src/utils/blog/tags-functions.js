import {
  getArticlesByTag,
  getAllArticleTags,
  getAllArticles,
} from "@/utils/blog/updated-functions";

export function getAllTagsCount() {
  const creationTags = getAllArticleTags("/content/creation");
  const logicTags = getAllArticleTags("/content/logic");
  const objectionTags = getAllArticleTags("/content/objections");
  const publicationTags = getAllArticleTags("/content/publications");
  const wordTags = getAllArticleTags("/content/word");
  const studiesTags = getAllArticleTags("/content/biblical-studies");

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
  studiesTags.forEach((studiesTag) => {
    const foundTag = allTags.find((tag) => tag.tag === studiesTag.tag);
    if (foundTag) {
      foundTag.count += studiesTag.count;
    } else {
      allTags.push(studiesTag);
    }
  });
  return allTags;
}

export function getAllTagsarticles() {
  const allCatWithArticles = [];
  const allTags = getAllTagsCount();

  allTags.forEach((tag) => {
    const creationArticlesByTag = getArticlesByTag(
      tag.tag,
      "/content/creation"
    );
    const logicsArticlesByTag = getArticlesByTag(tag.tag, "/content/logic");
    const objectionsArticlesByTag = getArticlesByTag(
      tag.tag,
      "/content/objectios"
    );
    const publicationsArticlesByTag = getArticlesByTag(
      tag.tag,
      "/content/publications"
    );
    const wordsArticlesByTag = getArticlesByTag(tag.tag, "/content/word");

    const StudiesArticlesByTag = getArticlesByTag(
      tag.tag,
      "/content/biblical-studies"
    );

    const adjustedCreationArticles = creationArticlesByTag.map((article) => {
      return { ...article, slug: "creation/" + article.slug };
    });
    const adjustedLogicArticles = logicsArticlesByTag.map((article) => {
      return { ...article, slug: "logic/" + article.slug };
    });
    const adjustedObjectionArticles = objectionsArticlesByTag.map((article) => {
      return { ...article, slug: "objections/" + article.slug };
    });
    const adjustedPublicationArticles = publicationsArticlesByTag.map(
      (article) => {
        return { ...article, slug: "publications/" + article.slug };
      }
    );
    const adjustedWordArticles = wordsArticlesByTag.map((article) => {
      return { ...article, slug: "words/" + article.slug };
    });
    const adjustedStudiesArticles = StudiesArticlesByTag.map((article) => {
      return { ...article, slug: "studies/" + article.slug };
    });

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
  const publicationsArticlesByTag = getArticlesByTag(
    tag,
    "/content/publications"
  );
  const wordsArticlesByTag = getArticlesByTag(tag, "/content/word");
  const studiesArticlesByTag = getArticlesByTag(
    tag,
    "/content/biblical-studies"
  );

  const creationArticlesAdjusted = creationArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `creation/${article.slug}`,
    };
  });
  const objectionsArticlesAdjusted = objectionsArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `objections/${article.slug}`,
    };
  });
  const logicsArticlesAdjusted = logicsArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `logic/${article.slug}`,
    };
  });
  const publicationsArticlesAdjusted = publicationsArticlesByTag.map(
    (article) => {
      return {
        ...article,
        slug: `publications/${article.slug}`,
      };
    }
  );
  const wordsArticlesAdjusted = wordsArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `words/${article.slug}`,
    };
  });
  const studiesArticlesAdjusted = studiesArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `studies/${article.slug}`,
    };
  });
  const allArticles = [
    ...creationArticlesAdjusted,
    ...objectionsArticlesAdjusted,
    ...logicsArticlesAdjusted,
    ...publicationsArticlesAdjusted,
    ...wordsArticlesAdjusted,
    ...studiesArticlesAdjusted,
  ];
  return allArticles;
}

export function getArticlesByTagComined(tag) {
  const creationArticlesByTag = getArticlesByTag(tag, "/content/creation");
  const logicsArticlesByTag = getArticlesByTag(tag, "/content/logic");
  const objectionsArticlesByTag = getArticlesByTag(tag, "/content/objections");
  const publicationsArticlesByTag = getArticlesByTag(
    tag,
    "/content/publications"
  );
  const wordsArticlesByTag = getArticlesByTag(tag, "/content/word");
  const creationArticlesAdjusted = creationArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `creation/${article.slug}`,
    };
  });
  const objectionsArticlesAdjusted = objectionsArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `objections/${article.slug}`,
    };
  });
  const logicsArticlesAdjusted = logicsArticlesByTag.map((article) => {
    return {
      ...article,
      slug: `logic/${article.slug}`,
    };
  });
  const publicationsArticlesAdjusted = publicationsArticlesByTag.map(
    (article) => {
      return {
        ...article,
        slug: `publications/${article.slug}`,
      };
    }
  );
  const allArticles = [
    ...creationArticlesAdjusted,
    ...objectionsArticlesAdjusted,
    ...logicsArticlesAdjusted,
    ...publicationsArticlesAdjusted,
    ...wordsArticlesByTag,
  ];
  return allArticles;
}
