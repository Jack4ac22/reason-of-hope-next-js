import Head from "next/head";
import {
  getWordsFiles,
  getWordData,
  getPostData,
} from "../../utilities/word-functions.js";
import { remark } from "remark";
import html from "remark-html";
import React from "react";
import ReactMarkdown from "react-markdown";

function WordDetailPage(props) {
  //   check if there is content then:
  const content = props.word.content;
  const words = content.split(/\s+/);
  const first30Words = words.slice(0, 30).join(" ");
  return (
    <>
      <Head>
        <title>{props.word.title}</title>
        <meta name="description" content={first30Words + " ... "} />
      </Head>
      {/* <WordContent word={props.word} /> */}
      <ReactMarkdown>{content}</ReactMarkdown>
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
    revalidate: 600,
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