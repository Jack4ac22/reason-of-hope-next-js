import ArticleContentPageComponent from "../../components/article-components/single-article-page/article-content-page";
// import { allArticlesData } from "../../utilities/updated-functions";
import allArticles from "../../assets/articles.json";
import { randomArticlesFromArray } from "../../utilities/general-functions";
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
  // get five random articles from the blogArticles
  const randomArticles = randomArticlesFromArray(blogArticles, 3);
  const { params } = context;
  const { slug } = params;

  const article = blogArticles.find(
    (article) => article.fullSlug === slug.join("/")
  );


  if (article.length === 0) {
    console.log("article not found", slug.join("/"));
    redirect("/404");
  }
  article.related = randomArticles;
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
