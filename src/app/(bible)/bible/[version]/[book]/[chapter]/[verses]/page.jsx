import {
  getAvailableVersions,
  getVerse,
  getChapter,
  getVersesFromChapter,
  getVersesFromMultipleChapters,
  listBooks,
  listChapters,
  getHeader
} from "@/utils/bible/bible-references"
export default function BiblePage({ params }) {
  const { version, book, chapter, verses } = params
  const availableVersions = getAvailableVersions();


  return (
    <div>
      <h1>{version} - {book} {chapter}</h1>

    </div>
  );
}
