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
// TODO: add show more button and make it work based on the number of article passed in the props, the default will be 8 articles. check if 8 is higher thatn the available articles.