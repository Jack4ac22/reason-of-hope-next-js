export default function ArticleHeader({ article }) {
  return (
    <header>
      <div className="flex flex-col items-center">
        <h1 className="my-3 text-4xl font-extrabold">{article.title}</h1>
      </div>
      <div className="flex flex-row-reverse">
        <p className="">
          <span>تاريخ النشر: </span>
          <span>{new Date(article.date).toLocaleDateString('ar-SY')}</span>
        </p>
      </div>
      <br/>
    </header>
  );
}