import {
  getArticleFiles,
  getArticleData,
} from "../../../utilities/articles-functions.js";
import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page";
import HeroMain from "../../../components/main/hero-main";

export default function PublicationsArtilePage(props) {
  const { article } = props;
  return (
    <>
      {article.status === "published" && (
        <ArticleContentPageComponent article={article} isBook={true}  urlBase={'/publications'}/>
      )}
      {article.status !== "published" && <HeroMain />}
    </>
  );
}
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const publicationsArticleData = getArticleData(slug, "/content/publications");
  return {
    props: {
      article: publicationsArticleData,
    },
    revalidate: 43200, // validate every 12 hours
  };
}

export function getStaticPaths() {
  const publicationsArticleFilenames = getArticleFiles("/content/publications");

  const slugs = publicationsArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
