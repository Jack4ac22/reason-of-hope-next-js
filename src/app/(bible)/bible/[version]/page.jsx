import Link from "next/link";
import { listBooks } from "@/utils/bible/bible-references"
export default function VersionPage({ params }) {
  const { version } = params
  console.log(`listBooks(${version})`);
  const books = listBooks( version )

  return (
    <div>
      <h1>{version}</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>
            <Link href={`/bible/${version}/${book}`}>{book}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}