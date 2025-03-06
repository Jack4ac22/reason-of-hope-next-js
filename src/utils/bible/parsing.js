/**
 * Mapping of canonical OSIS book IDs to an array of acceptable book names (in lower case).
 * Extend this object with additional books and alternate names as needed.
 */
const BOOK_ALIASES = {
  "Gen": ["genesis", "gen"],
  "Exod": ["exodus", "exod", "exo"],
  "Lev": ["leviticus", "lev"],
  "Num": ["numbers", "num"],
  "Deut": ["deuteronomy", "deut"],
  "Josh": ["joshua", "josh"],
  "Judg": ["judges", "judg"],
  "Ruth": ["ruth"],
  "Matt": ["matthew", "matt"],
  "Mark": ["mark"],
  "Luke": ["luke"],
  "John": ["john"],
  // ... add other books as needed
};

/**
 * Parses a Bible reference string that may represent a single verse, a verse range, or a chapter range.
 *
 * Supported formats (case-insensitive):
 *
 * 1. Single verse reference:
 *    "Gen.1.1", "genesis.1.1", "GEN.1.1"
 *
 * 2. Verse range within a single chapter:
 *    "gen.1.1-5"  (interpreted as Genesis chapter 1, verses 1 through 5)
 *
 * 3. Verse range spanning chapters:
 *    "Gen.1.1-2.3" (interpreted as from Genesis 1:1 to Genesis 2:3)
 *
 * 4. Chapter range (all verses in each chapter):
 *    "Gen 1-2"    (interpreted as all verses in Genesis chapters 1 through 2)
 *
 * 5. Mixed format:
 *    "gen 1.1-2"  (if the end part lacks a dot, it is treated as a chapter range: chapters 1 through 2)
 *
 * @param {string} ref - The Bible reference string.
 * @returns {Object} An object describing the parsed reference range.
 *   For a single verse: { type: "single", book, chapter, verse }
 *   For a verse range in one chapter: { type: "verse-range", book, chapter, startVerse, endVerse }
 *   For a verse range across chapters: { type: "verse-range-across-chapters", book, startChapter, startVerse, endChapter, endVerse }
 *   For a chapter range: { type: "chapter-range", book, startChapter, endChapter }
 * @throws {Error} If the input format is invalid or the book is unknown.
 */
function parseBibleReferenceRange(ref) {
  // First, trim the input.
  const trimmed = ref.trim();

  // Use a regex to split the book part from the rest.
  // This regex looks for a sequence of alphanumeric characters (the book)
  // followed by either a dot or whitespace, then the remaining reference.
  const parts = trimmed.match(/^([a-zA-Z0-9]+)[\.\s]+(.+)$/);
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

  // Determine the type based on whether each part contains a dot.
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

  // Case 3: Mixed format — if the start has a dot but the end does not,
  // interpret it as a chapter range (ignoring the verse in the start).
  if (startHasDot && !endHasDot) {
    // e.g., "gen 1.1-2" => treat as chapter range from chapter 1 to chapter 2.
    const startChap = parseInt(startRef.split('.')[0], 10);
    const endChap = parseInt(endRef, 10);
    return {
      type: "chapter-range",
      book: canonicalBook,
      startChapter: startChap,
      endChapter: endChap,
    };
  }

  // If the format does not match any known pattern, throw an error.
  throw new Error(`Could not parse Bible reference range: "${ref}"`);
}

// Example usages:
try {
  // Single verse
  console.log(parseBibleReferenceRange("Genesis.1.1"));
  // { type: "single", book: "Gen", chapter: 1, verse: 1 }

  // Verse range in one chapter
  console.log(parseBibleReferenceRange("gen.1.1-5"));
  // { type: "verse-range", book: "Gen", chapter: 1, startVerse: 1, endVerse: 5 }

  // Verse range across chapters
  console.log(parseBibleReferenceRange("Gen.1.1-2.3"));
  // { type: "verse-range-across-chapters", book: "Gen", startChapter: 1, startVerse: 1, endChapter: 2, endVerse: 3 }

  // Chapter range
  console.log(parseBibleReferenceRange("Gen 1-2"));
  // { type: "chapter-range", book: "Gen", startChapter: 1, endChapter: 2 }

  // Mixed format (interpreted as a chapter range)
  console.log(parseBibleReferenceRange("gen 1.1-2"));
  // { type: "chapter-range", book: "Gen", startChapter: 1, endChapter: 2 }
} catch (error) {
  console.error(error.message);
}
