import WordContentPageComponent from "../../components/word-components/single-word/word-content-page";

import {
  getObjectionsFiles,
  getObjectionData,
} from "../../utilities/objections-functions";

export default function objectionArtilePage(props) {
  const { objection } = props;
  return (
    <>
      <WordContentPageComponent word={objection} />
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
