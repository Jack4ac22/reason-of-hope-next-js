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
  return divs.find(div => div?.osisID && div.osisID._value === book) || null;
}

/**
 * Retrieves a single verse text from the Bible data.
 *
 * @param {string} version - The Bible version to use.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @param {number} chapter - The chapter number.
 * @param {number} verse - The verse number.
 * @returns {string|null} The verse text, or null if not found.
 * @throws Will throw an error if the specified version is not available.
 */
function getVerse(version = 'AVD', book, chapter, verse) {
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
 * @param {string} version - The Bible version to use.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @param {number} chapter - The chapter number.
 * @returns {Object[]|null} Array of verse objects from the chapter, or null if not found.
 */
function getChapter(version = 'AVD', book, chapter) {
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
  return chapterData.verse;
}

/**
 * Retrieves multiple verses from a single chapter.
 *
 * @param {string} version - The Bible version to use.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @param {number} chapter - The chapter number.
 * @param {number[]} verses - An array of verse numbers to retrieve.
 *                           If empty, returns all verses in the chapter.
 * @returns {Object[]|null} Array of verse objects or null if chapter not found.
 */
function getVersesFromChapter(version = 'AVD', book, chapter, verses = []) {
  const chapterData = getChapter(version, book, chapter);
  if (!chapterData) return null;
  if (!Array.isArray(verses) || verses.length === 0) {
    return chapterData;
  }
  return chapterData.filter(v => verses.includes(v.vnumber));
}

/**
 * Retrieves verses from multiple chapters.
 *
 * @param {string} version - The Bible version to use.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @param {Object} versesByChapter - An object where keys are chapter numbers (as strings)
 *                                   and values are arrays of verse numbers to retrieve.
 *                                   If an array is empty, the entire chapter is returned.
 * @returns {Object} An object mapping chapter numbers to arrays of verse objects.
 */
function getVersesFromMultipleChapters(version = 'AVD', book, versesByChapter = {}) {
  const result = {};
  for (const [chapterKey, verses] of Object.entries(versesByChapter)) {
    const chapterNumber = parseInt(chapterKey, 10);
    const chapterData = getChapter(version, book, chapterNumber);
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
 * @param {string} version - The Bible version to use.
 * @returns {string[]} Array of book identifiers (e.g., ["Gen", "Exod", ...]).
 */
function listBooks(version = 'AVD') {
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
 * @param {string} version - The Bible version to use.
 * @returns {Object|null} Header metadata object or null if not available.
 */
function getHeader(version = 'AVD') {
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
 * @param {string} version - The Bible version to use.
 * @param {string} book - The book identifier (e.g., "Gen").
 * @returns {number[]} Array of chapter numbers available in the book.
 */
function listChapters(version = 'AVD', book) {
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

/**
 * Retrieves verses based on a parsed Bible reference range.
 * The parsed object should be generated by the parseBibleReferenceRange function.
 *
 * Supported parsed types:
 *   - "single": a single verse reference.
 *   - "verse-range": verses within one chapter.
 *   - "verse-range-across-chapters": verses spanning multiple chapters.
 *   - "chapter-range": all verses in a range of chapters.
 *   - "chapter": a single chapter reference.
 *   - "book": a book-only reference (all verses from all chapters).
 *
 * @param {Object} parsed - The parsed Bible reference object.
 * @param {string} [version="AVD"] - The Bible version to use.
 * @returns {Object[]} An array of verse objects. Each object typically contains:
 *                       - chapter: {number} Chapter number.
 *                       - vnumber: {number} Verse number.
 *                       - _text: {string} Verse text.
 * @throws {Error} If an unknown parsed type is encountered.
 */
function getVersesFromParsedReference(parsed, version = "AVD") {
  let verses = [];
  switch (parsed.type) {
    case "single": {
      const text = getVerse(version, parsed.book, parsed.chapter, parsed.verse);
      if (text) {
        verses.push({ chapter: parsed.chapter, vnumber: parsed.verse, _text: text });
      }
      break;
    }
    case "verse-range": {
      const chapterData = getChapter(version, parsed.book, parsed.chapter);
      if (chapterData) {
        verses = chapterData.filter(v => v.vnumber >= parsed.startVerse && v.vnumber <= parsed.endVerse)
          .map(v => ({ chapter: parsed.chapter, ...v }));
      }
      break;
    }
    case "verse-range-across-chapters": {
      for (let chap = parsed.startChapter; chap <= parsed.endChapter; chap++) {
        const chapterData = getChapter(version, parsed.book, chap);
        if (!chapterData) continue;
        if (chap === parsed.startChapter && chap === parsed.endChapter) {
          verses = verses.concat(
            chapterData.filter(v => v.vnumber >= parsed.startVerse && v.vnumber <= parsed.endVerse)
              .map(v => ({ chapter: chap, ...v }))
          );
        } else if (chap === parsed.startChapter) {
          verses = verses.concat(
            chapterData.filter(v => v.vnumber >= parsed.startVerse)
              .map(v => ({ chapter: chap, ...v }))
          );
        } else if (chap === parsed.endChapter) {
          verses = verses.concat(
            chapterData.filter(v => v.vnumber <= parsed.endVerse)
              .map(v => ({ chapter: chap, ...v }))
          );
        } else {
          verses = verses.concat(
            chapterData.map(v => ({ chapter: chap, ...v }))
          );
        }
      }
      break;
    }
    case "chapter-range": {
      for (let chap = parsed.startChapter; chap <= parsed.endChapter; chap++) {
        const chapterData = getChapter(version, parsed.book, chap);
        if (chapterData) {
          verses = verses.concat(chapterData.map(v => ({ chapter: chap, ...v })));
        }
      }
      break;
    }
    case "chapter": {
      verses = getChapter(version, parsed.book, parsed.chapter) || [];
      verses = verses.map(v => ({ chapter: parsed.chapter, ...v }));
      break;
    }
    case "book": {
      // For a book-only reference, retrieve all chapters in the book.
      const chapters = listChapters(version, parsed.book);
      for (const chap of chapters) {
        const chapterData = getChapter(version, parsed.book, chap);
        if (chapterData) {
          verses = verses.concat(chapterData.map(v => ({ chapter: chap, ...v })));
        }
      }
      break;
    }
    default:
      throw new Error(`Unknown parsed reference type: "${parsed.type}"`);
  }
  return verses;
}

export {
  getAvailableVersions,
  loadBibleData,
  getBookDiv,
  getVerse,
  getChapter,
  getVersesFromChapter,
  getVersesFromMultipleChapters,
  listBooks,
  listChapters,
  getHeader,
  getVersesFromParsedReference
};
