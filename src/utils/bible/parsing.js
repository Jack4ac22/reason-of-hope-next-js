import { BOOK_ALIASES } from "@/utils/bible/books-aliases";

/**
 * Parses a Bible reference string that may represent:
 * - A single verse reference (e.g. "Gen.1.1")
 * - A verse range within one chapter (e.g. "gen.1.1-5")
 * - A verse range spanning chapters (e.g. "Gen.1.1-2.3")
 * - A chapter range (all verses in each chapter, e.g. "Gen 1-2")
 * - A mixed format (e.g. "gen 1.1-2", which is now treated as a verse range if the end number is greater than the start verse)
 * - A book-only reference (e.g. "Genesis" or its Arabic equivalent)
 *
 * @param {string} ref - The Bible reference string.
 * @returns {Object} An object describing the parsed reference.
 *   For a single verse: { type: "single", book, chapter, verse }
 *   For a verse range in one chapter: { type: "verse-range", book, chapter, startVerse, endVerse }
 *   For a verse range across chapters: { type: "verse-range-across-chapters", book, startChapter, startVerse, endChapter, endVerse }
 *   For a chapter range: { type: "chapter-range", book, startChapter, endChapter }
 *   For a single chapter: { type: "chapter", book, chapter }
 *   For a book-only reference: { type: "book", book }
 * @throws {Error} If the input format is invalid or the book is unknown.
 */
function parseBibleReferenceRange(ref) {
  // First, trim the input.
  const trimmed = ref.trim();

  // Check if the input contains any dot or whitespace.
  if (!trimmed.includes(' ') && !trimmed.includes('.')) {
    // Treat the entire string as a book name.
    const bookInput = trimmed.toLowerCase();
    let canonicalBook = null;
    for (const [osis, aliases] of Object.entries(BOOK_ALIASES)) {
      if (aliases.includes(bookInput)) {
        canonicalBook = osis;
        break;
      }
    }
    if (!canonicalBook) {
      throw new Error(`Unknown book: "${bookInput}" in reference "${ref}"`);
    }
    return { type: "book", book: canonicalBook };
  }

  // Use a Unicode regex to split the book part from the rest.
  // This matches one or more Unicode letters or digits.
  const parts = trimmed.match(/^([\p{L}\p{N}]+)[\.\s]+(.+)$/u);
  if (!parts) {
    throw new Error(`Invalid reference format: "${ref}"`);
  }
  const bookInput = parts[1].toLowerCase();
  const rangePart = parts[2].trim();

  // Normalize the book using BOOK_ALIASES.
  let canonicalBook = null;
  for (const [osis, aliases] of Object.entries(BOOK_ALIASES)) {
    if (aliases.includes(bookInput)) {
      canonicalBook = osis;
      break;
    }
  }
  if (!canonicalBook) {
    throw new Error(`Unknown book: "${bookInput}" in reference "${ref}"`);
  }

  // If there is no dash, treat it as a single reference.
  if (!rangePart.includes('-')) {
    if (rangePart.includes('.')) {
      const [chap, ver] = rangePart.split('.').map(s => parseInt(s, 10));
      return { type: "single", book: canonicalBook, chapter: chap, verse: ver };
    } else {
      const chap = parseInt(rangePart, 10);
      return { type: "chapter", book: canonicalBook, chapter: chap };
    }
  }

  // Split on dash into start and end parts.
  const [startRef, endRef] = rangePart.split('-').map(s => s.trim());

  // Determine whether each part contains a dot.
  const startHasDot = startRef.includes('.');
  const endHasDot = endRef.includes('.');

  // Case 1: Both parts contain a dot — a verse range (possibly across chapters).
  if (startHasDot && endHasDot) {
    const [startChap, startVerse] = startRef.split('.').map(s => parseInt(s, 10));
    const [endChap, endVerse] = endRef.split('.').map(s => parseInt(s, 10));
    if (startChap === endChap) {
      return {
        type: "verse-range",
        book: canonicalBook,
        chapter: startChap,
        startVerse,
        endVerse,
      };
    } else {
      return {
        type: "verse-range-across-chapters",
        book: canonicalBook,
        startChapter: startChap,
        startVerse,
        endChapter: endChap,
        endVerse,
      };
    }
  }

  // Case 2: Neither part contains a dot — a chapter range.
  if (!startHasDot && !endHasDot) {
    const startChap = parseInt(startRef, 10);
    const endChap = parseInt(endRef, 10);
    return {
      type: "chapter-range",
      book: canonicalBook,
      startChapter: startChap,
      endChapter: endChap,
    };
  }

  // Case 3: Mixed format — start has a dot but the end does not.
  if (startHasDot && !endHasDot) {
    const [startChapStr, startVerseStr] = startRef.split('.');
    const startChap = parseInt(startChapStr, 10);
    const startVerse = parseInt(startVerseStr, 10);
    const endCandidate = parseInt(endRef, 10);
    // If the end candidate is greater than the start verse, treat as a verse range.
    if (endCandidate > startVerse) {
      return {
        type: "verse-range",
        book: canonicalBook,
        chapter: startChap,
        startVerse,
        endVerse: endCandidate,
      };
    } else {
      // Otherwise, interpret as a chapter range.
      return {
        type: "chapter-range",
        book: canonicalBook,
        startChapter: startChap,
        endChapter: endCandidate,
      };
    }
  }

  throw new Error(`Could not parse Bible reference range: "${ref}"`);
}

export { parseBibleReferenceRange };
