import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page";
import {
  getArticleFiles,
  getArticleData,
} from "../../../utilities/articles-functions.js";

export default function objectionArtilePage(props) {
  const { article } = props;
  return (
    <>
      <ArticleContentPageComponent article={article} />{" "}
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const objectionData =   getArticleData(slug, "/content/objections");
  return {
    props: {
      article: objectionData,
    },
    revalidate: 30000,
  };
}
export function getStaticPaths() {
  const objectionFilenames = getArticleFiles("/content/objections");
  const slugs = objectionFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
