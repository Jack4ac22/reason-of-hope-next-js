export default function NotionArticleDate({ article }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <p className="text-left font-ligh tracking-wide	mb-2">
      <span>تاريخ النشر: </span>
      <span>{new Date(article.date).toLocaleDateString('ar-SY', options)}</span>
    </p>
  );
}