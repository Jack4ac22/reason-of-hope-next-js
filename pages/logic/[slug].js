import WordContentPageComponent from "../../components/word-components/single-word/word-content-page";
import Head from "next/head";
import {
  getLogicsFiles,
  getLogicData,
} from "../../utilities/logic-functions.js";
import React from "react";

export default function LogicArtilePage(props) {
  const { logicArticle } = props;
  return (
    <>
      <WordContentPageComponent word={logicArticle} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const logicArticleData = getLogicData(slug);
  return {
    props: {
      logicArticle: logicArticleData,
    },
    revalidate: 30000,
  };
}

export function getStaticPaths() {
  const logicArticleFilenames = getLogicsFiles();
  const slugs = logicArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}