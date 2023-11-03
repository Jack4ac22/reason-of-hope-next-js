import ArticleContentPageComponent from "../../components/article-components/single-article-page/article-content-page";
import {
  getObjectionsFiles,
  getObjectionData,
} from "../../utilities/objections-functions";

export default function objectionArtilePage(props) {
  const { objection } = props;
  return (
    <>
      <ArticleContentPageComponent article={objection} />{" "}
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const objectionData = getObjectionData(slug);
  return {
    props: {
      objection: objectionData,
    },
    revalidate: 30000,
  };
}
export function getStaticPaths() {
  const objectionFilenames = getObjectionsFiles();
  const slugs = objectionFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
