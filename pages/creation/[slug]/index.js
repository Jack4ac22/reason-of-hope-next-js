import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page";
import {
  getArticleFiles,
  getArticleData,
} from "../../../utilities/articles-functions.js";

export default function CreationsArtilePage(props) {
  const { article } = props;

  return (
    <>
      <ArticleContentPageComponent article={article} />
    </>
  );
}
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const creationArticleData = getArticleData(slug, "/content/creation");
  return {
    props: {
      article: creationArticleData,
    },
    revalidate: 43200, // validate every 12 hours
  };
}
export function getStaticPaths() {
  const creationArticleFilenames = getArticleFiles("/content/creation");
  const slugs = creationArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
