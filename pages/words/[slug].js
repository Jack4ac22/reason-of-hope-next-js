import WordContentPageComponent from "../../components/word-components/single-word/word-content-page";
import Head from "next/head";
import {
  getWordsFiles,
  getWordData,
  getPostData,
} from "../../utilities/word-functions.js";
import React from "react";

function WordDetailPage(props) {
  const { word } = props;
  return (
    <>
      <Head>
        <title>{props.word.title}</title>
        <meta name="description" content={word.descrition + " ... "} />
        <meta property="og:title" content="My Dummy Markdown Page" />
        <meta property="og:description" content={word.descrition + " ... "} />
        <meta property="og:image" content={`/word-images/${word.coverImage}`} />
        <meta
          property="og:image:alt"
          content={`Cover Image for: ${word.slug}`}
        />
      </Head>
      <WordContentPageComponent word={word} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const wordData = getWordData(slug);
  const wordHtmlData = getPostData(slug);
  return {
    props: {
      word: wordData,
    },
    revalidate: 30000,
  };
}

export function getStaticPaths() {
  const wordFilenames = getWordsFiles();

  const slugs = wordFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default WordDetailPage;
