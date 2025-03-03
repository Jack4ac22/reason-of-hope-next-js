import fs from 'fs';
import path from 'path';

// Define the folder where Bible JSON files are stored.
const biblesDir = path.join(process.cwd(), 'src/assets/blog/bible-related/bibles');

/**
 * Retrieves the list of available Bible versions based on the JSON files in the folder.
 *
 * @returns {string[]} Array of version names (filenames without the .json extension).
 */
function getAvailableVersions() {
  try {
    const files = fs.readdirSync(biblesDir);
    return files.filter(file => file.endsWith('.json')).map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading Bible versions directory:', error);
    return [];
  }
}

/**
 * Loads and parses the Bible data for the specified version.
 *
 * @param {string} version - The Bible version to load.
 * @returns {Object} Parsed JSON data of the Bible.
 * @throws Will throw an error if reading or parsing the file fails.
 */
function loadBibleData(version) {
  const filePath = path.join(biblesDir, `${version}.json`);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Internal helper to retrieve the book-level data ("div") for a given book.
 *
 * @param {Object} bibleData - The complete Bible JSON data.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @returns {Object|null} The book object from the JSON structure or null if not found.
 */
function getBookDiv(bibleData, book) {
  const osisArray = bibleData.osis;
  if (!osisArray || osisArray.length === 0) return null;
  const osisText = osisArray[0].osisText;
  if (!osisText || osisText.length === 0) return null;
  const divs = osisText[0].div;
  if (!divs) return null;
  const div = divs.find(div => div?.osisID && div.osisID._value === book) || null;
  return div;
}

/**
 * Retrieves a single verse text from the Bible data.
 *
 * @param {Object} params - Parameters for verse retrieval.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @param {string} params.book - The book identifier (e.g., "Gen").
 * @param {number} params.chapter - The chapter number.
 * @param {number} params.verse - The verse number.
 * @returns {string|null} The verse text, or null if not found.
 * @throws Will throw an error if the specified version is not available.
 */
function getVerse( version = 'AVD', book, chapter, verse ) {
  const availableVersions = getAvailableVersions();
  if (!availableVersions.includes(version)) {
    throw new Error(
      `Version "${version}" not available. Available versions are: ${availableVersions.join(', ')}`
    );
  }
  const bibleData = loadBibleData(version);
  const bookDiv = getBookDiv(bibleData, book);
  if (!bookDiv) return null;
  const chapterData = bookDiv.chapter.find(ch => ch.cnumber === chapter);
  if (!chapterData) return null;
  const verseData = chapterData.verse.find(v => v.vnumber === verse);
  return verseData ? verseData._text : null;
}

/**
 * Retrieves all verses from a specified chapter.
 *
 * @param {Object} params - Parameters for chapter retrieval.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @param {string} params.book - The book identifier (e.g., "Gen").
 * @param {number} params.chapter - The chapter number.
 * @returns {Object[]|null} Array of verse objects from the chapter, or null if not found.
 * Each verse object typically contains properties like vnumber and _text.
 * @throws Will throw an error if the specified version is not available.
 */
function getChapter( version = 'AVD', book, chapter ) {

  const availableVersions = getAvailableVersions();
  if (!availableVersions.includes(version)) {
    throw new Error(
      `Version "${version}" not available. Available versions are: ${availableVersions.join(', ')}`
    );
  }
  const bibleData = loadBibleData(version);
  const bookDiv = getBookDiv(bibleData, book);
  if (!bookDiv) return null;
  const chapterData = bookDiv.chapter.find(ch => ch.cnumber == chapter);
  if (!chapterData) return null;
  return chapterData.verse;
}

/**
 * Retrieves multiple verses from a single chapter.
 *
 * @param {Object} params - Parameters for retrieving verses.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @param {string} params.book - The book identifier (e.g., "Gen").
 * @param {number} params.chapter - The chapter number.
 * @param {number[]} [params.verses=[]] - An array of verse numbers to retrieve.
 * If empty, returns all verses in the chapter.
 * @returns {Object[]|null} Array of verse objects or null if chapter not found.
 * @throws Will throw an error if the specified version is not available.
 */
function getVersesFromChapter( version = 'AVD', book, chapter, verses = [] ) {
  const chapterData = getChapter({ version, book, chapter });
  if (!chapterData) return null;
  if (!Array.isArray(verses) || verses.length == 0) {
    return chapterData;
  }
  return chapterData.filter(v => verses.includes(v.vnumber));
}

/**
 * Retrieves verses from multiple chapters.
 *
 * @param {Object} params - Parameters for retrieving verses.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @param {string} params.book - The book identifier (e.g., "Gen").
 * @param {Object} params.versesByChapter - An object where keys are chapter numbers (as strings)
 * and values are arrays of verse numbers to retrieve. If an array is empty, the entire chapter is returned.
 * @returns {Object} An object mapping chapter numbers to arrays of verse objects.
 * @throws Will throw an error if the specified version is not available.
 */
function getVersesFromMultipleChapters( version = 'AVD', book, versesByChapter = {} ) {
  const result = {};
  for (const [chapterKey, verses] of Object.entries(versesByChapter)) {
    const chapterNumber = parseInt(chapterKey, 10);
    const chapterData = getChapter({ version, book, chapter: chapterNumber });
    if (!chapterData) continue;
    result[chapterNumber] = (!Array.isArray(verses) || verses.length === 0)
      ? chapterData
      : chapterData.filter(v => verses.includes(v.vnumber));
  }
  return result;
}

/**
 * Lists the available books in the Bible data for the specified version.
 *
 * @param {Object} params - Parameters for listing books.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @returns {string[]} Array of book identifiers (e.g., ["Gen", "Exod", ...]).
 * @throws Will throw an error if the specified version is not available.
 */
function listBooks(version = 'AVD' ) {
  const availableVersions = getAvailableVersions();
  if (!availableVersions.includes(version)) {
    throw new Error(
      `Version "${version}" not available. Available versions are: ${availableVersions.join(', ')}`
    );
  }
  const bibleData = loadBibleData(version);
  const osisArray = bibleData.osis;
  if (!osisArray || osisArray.length === 0) return [];
  const osisText = osisArray[0].osisText;
  if (!osisText || osisText.length === 0) return [];
  const divs = osisText[0].div;
  if (!divs) return [];
  return divs.map(div => div.osisID?._value).filter(Boolean);
}

/**
 * Retrieves header metadata from the Bible file, if available.
 *
 * @param {Object} params - Parameters for retrieving header.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @returns {Object|null} Header metadata object or null if not available.
 * @throws Will throw an error if the specified version is not available.
 */
function getHeader(version = 'AVD' ) {
  const availableVersions = getAvailableVersions();
  if (!availableVersions.includes(version)) {
    throw new Error(
      `Version "${version}" not available. Available versions are: ${availableVersions.join(', ')}`
    );
  }
  const bibleData = loadBibleData(version);
  const osisArray = bibleData.osis;
  if (!osisArray || osisArray.length === 0) return null;
  const osisText = osisArray[0].osisText;
  if (!osisText || osisText.length === 0) return null;
  return osisText[0].header || null;
}

/**
 * Lists the chapter numbers available in a specified book.
 *
 * @param {Object} params - Parameters for listing chapters.
 * @param {string} [params.version="AVD"] - The Bible version to use.
 * @param {string} params.book - The book identifier (e.g., "Gen").
 * @returns {number[]} Array of chapter numbers available in the book.
 * @throws Will throw an error if the specified version is not available.
 */
function listChapters(version = 'AVD', book ) {
  const availableVersions = getAvailableVersions();
  if (!availableVersions.includes(version)) {
    throw new Error(
      `Version "${version}" not available. Available versions are: ${availableVersions.join(', ')}`
    );
  }
  const bibleData = loadBibleData(version);
  const bookDiv = getBookDiv(bibleData, book);
  if (!bookDiv || !bookDiv.chapter) return [];
  return bookDiv.chapter.map(ch => ch.cnumber);
}

export {
  getAvailableVersions,
  getVerse,
  getChapter,
  getVersesFromChapter,
  getVersesFromMultipleChapters,
  listBooks,
  listChapters,
  getHeader
};
