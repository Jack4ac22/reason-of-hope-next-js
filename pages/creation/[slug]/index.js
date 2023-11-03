import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page";

import {
  getCreationArticlesFiles,
  getCreationArticleData,
} from "../../../utilities/creation-functions";

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
  const creationArticleData = getCreationArticleData(slug);
  return {
    props: {
      article: creationArticleData,
    },
    revalidate: 30000,
  };
}
export function getStaticPaths() {
  const creationArticleFilenames = getCreationArticlesFiles();
  const slugs = creationArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
