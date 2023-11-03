import ArticleCard from "./article-card";
export default function ArticleCardsList(props) {
  const articles = props.articles;
  const baseUrl = props.baseUrl;
  return (
    <>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              baseUrl={baseUrl}
            />
          );
        })}
      </section>
    </>
  );
}
