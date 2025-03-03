
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
import Link from "next/link";
export default async function BibilePage() {
  const availableVersions = getAvailableVersions();
  console.log(availableVersions);
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