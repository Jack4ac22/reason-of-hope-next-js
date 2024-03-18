import bible_verses from '@/verses.json'


/**
 * Retrieves Bible verses based on the given OSIS reference.
 *
 * @param {string} ref - The OSIS reference of the Bible verse(s) to retrieve.
 * @returns {Array|Object} - An array of targeted verses if the reference is a range, or a single targeted verse object if the reference is not a range.
 */
export function getBibleVerseByOsisRef(ref) {
  const regex = /^[a-zA-Z]+\.\d+\.\d+(-\d+)?$/;
  if (!regex.test(ref)) {
    throw new Error('Invalid OSIS reference format. Expected format: "Book.Chapter.Verse" or "Book.Chapter.StartVerse-EndVerse".');
  }
  if (ref.includes('-')) {
    const range = ref.split('-');
    const reference_structure = range[0].split('.');
    const referenced_book = reference_structure[0];
    const referenced_chapter = reference_structure[1];
    const start_verse = reference_structure[2];
    const end_verse = range[1];
    let verses = [];
    for (let i = start_verse; i <= end_verse; i++) {
      verses.push(`${referenced_book}.${referenced_chapter}.${i}`);
    }
    let targeted_verses = [];
    verses.map(verse => {
      const targeted_verse = getBibleVerseByOsisRef(verse);
      targeted_verses.push(targeted_verse);
    })

    return targeted_verses;
  }
  else {
    const targeted_verse = bible_verses.find(verse => verse.fields.osisRef === ref);
    return targeted_verse;
  }
}