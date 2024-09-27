function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

export function randomArticlesFromArray(articlesList = [], number = 1) {
  let randomArticles = [];
  while (randomArticles.length < number) {
    const randomIndex = Math.floor(Math.random() * articlesList.length);
    randomArticles.push(articlesList[randomIndex]);
    randomArticles = [...new Set(randomArticles)]
  }
  return randomArticles;
}

export function replaceDashed(text) {
  if (text.includes("-")) {
    return replaceDashed(text.replace("-", " "));
  } else {
    return text;
  }
}

/**
 * Filters an array of objects and returns the value of the specified key from the first object that contains the key.
 *
 * @param {Array<Object>} dataArray - The array of objects to filter.
 * @param {string} key - The key to search for in the objects.
 * @returns {*} The value of the specified key from the first object that contains the key, or null if no object contains the key.
 */
export function filterByKeyValue(dataArray, key) {
  if (!Array.isArray(dataArray)) {
    return null;
  }
  const filteredItem = dataArray.find((item) => item.hasOwnProperty(key));
  return filteredItem ? filteredItem[key] : null;
}
