import Head from "next/head";
import CreationContentPageComponent from "../../../components/creation-components/single-creation/creation-content-page";

import {
  getCreationArticlesFiles,
  getCreationArticleData,
} from "../../../utilities/creation-functions";

export default function CreationsArtilePage(props) {
  const { creationArticle } = props;
  const { title, description, coverImage, content, authors } = creationArticle;

  return (
    <>
      <Head>
        <title>{creationArticle.title}</title>
        <meta
          name="description"
          content={creationArticle.description + " ... "}
        />
        <meta property="og:title" content={creationArticle.title} />
        <meta
          property="og:description"
          content={creationArticle.description + " ... "}
        />
        <meta
          property="og:image"
          content={`https://reasonofhope.com/blog-images/${
            creationArticle.coverImage ? creationArticle.coverImage : ROH.png
          }`}
        />
      </Head>
      <CreationContentPageComponent creation={creationArticle} />
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
