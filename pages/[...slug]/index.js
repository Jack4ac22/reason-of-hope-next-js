import ArticleContentPageComponent from "../../components/article-components/single-article-page/article-content-page";
import allArticles from "../../assets/articles.json";
export default function objectionArtilePage(props) {
  const { article } = props;
  // console.log("article: ", article);
  // console.log(article.related.length);
  return (
    <>
      <ArticleContentPageComponent article={article} urlBase={"/objections"} />
    </>
  );
}

export async function getStaticProps(context) {
  const blogArticles = allArticles;
  const { params } = await context;
  let slug;
  if (params) {
    slug = params.slug;
  } else {
    slug = ["/404"];
  }

  const article = blogArticles.find(
    (article) =>
      slug.join("/") === article.fullSlug ||
      `${article.year}/${article.month}/${article.day}/${article.slug}`
  );

  if (article.length === 0) {
    console.log("article not found", slug.join("/"));
    redirect("/404");
  }
  const articleInformation = article;

  return {
    props: {
      article: articleInformation,
    },
    revalidate: 30000,
  };
}
export async function getStaticPaths() {
  const articles = allArticles;
  const slugs = articles
    .map((article) => {
      if (article && "fullSlug" in article) {
        const slug = article.fullSlug;
        return slug;
      }
    })
    .filter(Boolean);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.split("/") } })),
    fallback: false,
  };
}
