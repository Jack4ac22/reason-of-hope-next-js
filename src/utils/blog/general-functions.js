function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

export function randomArticlesFromArray(articlesList = [], number = 1) {
  let randomArticles = [];
  while (randomArticles.length < number) {
    const randomIndex = Math.floor(Math.random() * articlesList.length);
    randomArticles.push(articlesList[randomIndex]);
    randomArticles = [...new Set(randomArticles)];
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

/**
 * Extracts and formats audio links from the given article object.
 * This function processes the `audio` array in the article object and filters out any empty or invalid links.
 * It also prepends Spotify and YouTube links (if available) to the resulting list of audio links.
 *
 * @param {Object} article - The article object containing audio links and additional metadata.
 * @param {Array<Object>} article.audio - Array of audio objects, each containing a title and a link.
 * @param {string} [article.spotify] - Spotify link for the article, if available.
 * @param {string} [article.youtube] - YouTube link for the article, if available.
 * @returns {Array<Object>} An array of formatted audio link objects. Each object contains `title` and `link` properties.
 *                          Returns an empty array if no valid audio links are found.
 *
 * @example
 * // Sample article object
 * const article = {
 *   audio: [{ SoundCloud: "https://soundcloud.com/track" }, { Podcast: "" }],
 *   spotify: "https://spotify.com/track",
 *   youtube: "https://youtube.com/track",
 * };
 *
 * // Calling getAudioLinks with the sample article object
 * const audioLinks = getAudioLinks(article);
 *
 * // Output:
 * // [
 * //   { title: 'youtube', link: 'https://youtube.com/track' },
 * //   { title: 'spotify', link: 'https://spotify.com/track' },
 * //   { title: 'SoundCloud', link: 'https://soundcloud.com/track' }
 * // ]
 */
export function getAudioLinksFromArticle(article) {
  // Check if audio property is present and has valid values
  if (!article?.audio || article.audio.length === 0) return [];

  // Collect all the valid audio links in one step
  const audioLinks = article.audio.reduce((acc, audio) => {
    const [title, link] = Object.entries(audio)[0];
    if (link?.trim()) acc.push({ title, link });
    return acc;
  }, []);

  // Add Spotify and YouTube links if present and non-empty
  if (article.spotify?.trim())
    audioLinks.unshift({ title: "spotify", link: article.spotify });
  if (article.youtube?.trim())
    audioLinks.unshift({ title: "youtube", link: article.youtube });

  return audioLinks;
}
