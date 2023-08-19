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

function orderObjectionsBy(objections, orderBy) {
  try {
    return objections.sort((objectionA, objectionB) =>
      objectionA[orderBy] > objectionB[orderBy] ? 1 : -1
    );
  } catch (error) {
    consoleLog(error);
  } finally {
    return objections;
  }
}

const objectionsDirectory = path.join(process.cwd(), "content/objections");

export function getObjectionsFiles() {
  return fs.readdirSync(objectionsDirectory);
}

export function getObjectionData(objectionIdentifier) {
  const objectionSlug = objectionIdentifier.replace(/\.md$/, "");
  const filePath = path.join(objectionsDirectory, `${objectionSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const objectionData = {
    slug: objectionSlug,
    ...data,
    content: content,
  };
  return objectionData;
}

export function getAllObjections(orderedBy = "date") {
  const objectionFiles = getObjectionsFiles();
  const allObjections = objectionFiles.map((objectionFile) => {
    return getObjectionData(objectionFile);
  });

  return orderObjectionsBy(allObjections, orderedBy);
}

export function getObjectionsByTag(tag) {
  return getAllObjections().filter((objection) => {
    if (objection && objection.tags) {
      return objection.tags.includes(tag);
    }
    return false;
  });
}

export function getObjectionsByCategory(category) {
  return getAllObjections().filter((objection) => {
    if (objection && objection.category) {
      return objection.category.includes(category);
    }
    return false;
  });
}

export function getObjectionsBySearchTerm(searchTerm) {
  return getAllObjections().filter((objection) => {
    if (objection && objection.title) {
      return (
        objection.title.includes(searchTerm) ||
        objection.content.includes(searchTerm)
      );
    }
    return false;
  });
}
