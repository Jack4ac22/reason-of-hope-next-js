import Link from "next/link";
import { listChapters } from "@/utils/bible/bible-references"
export default function BookPage({ params: { version, book } }) {
  const chapters = listChapters( version, book )
  return (
    <div>
      <h1>{version} - {book}</h1>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapters}>
            <Link href={`/bible/${version}/${book}/${chapter}`}>{chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}