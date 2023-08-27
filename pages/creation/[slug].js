import WordContentPageComponent from "../../components/word-components/single-word/word-content-page";

import {
  getCreationArticlesFiles,
  getCreationArticleData,
} from "../../utilities/creation-functions";

export default function CreationsArtilePage(props) {
  const { creationArticle } = props;
  return (
    <>
      <WordContentPageComponent word={creationArticle} />
    </>
  );
}
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const creationArticleData = getCreationArticleData(slug);
  return {
    props: {
      creationArticle: creationArticleData,
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
