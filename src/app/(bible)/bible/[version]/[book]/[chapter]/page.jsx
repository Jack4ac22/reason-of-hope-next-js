import { getChapter } from "@/utils/bible/bible-references";
export default function ChapterPage({ params: { version, book, chapter } }) {
  console.log(`getChapter(${version}, ${book}, ${chapter})`);
  const versesText = getChapter(version, book, chapter);
  return (
    <div>
      <h1>{version} - {book} {chapter}</h1>
      <p>
        {versesText.map((verse, index) => (
          <span key={index}>
            {verse._text}
          </span>
        ))}
      </p>
    </div>
  );
}