export default function ArticleDate({ article }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <p className="text-left font-ligh tracking-wide	">
      <span>تاريخ النشر: </span>
      <span>{new Date(article.date).toLocaleDateString('ar-SY', options)}</span>
    </p>
  );
}