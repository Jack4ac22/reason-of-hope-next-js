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
import { parseBibleReferenceRange } from "@/utils/bible/parsing"
import Link from "next/link";
export default async function BibilePage() {
  const availableVersions = getAvailableVersions();
  console.log(availableVersions);
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
  return (
    <>
      <div>Please chose your translation</div>
      <ul>
        {availableVersions.map((version) => (
          <li key={version}>
            <Link href={`/bible/${version}`}>{version}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}