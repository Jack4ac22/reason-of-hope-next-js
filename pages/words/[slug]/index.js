import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page.js";
import {
  getArticleFiles,
  getArticleData,
} from "../../../utilities/articles-functions.js";
import PageTitle from "../../../components/general-compenents/page-title.js";

function WordDetailPage(props) {
  const { word } = props;
  return (
    <>
      <PageTitle
        title={word.title}
        description={word.description}
        image={`/blog-images/${word.coverImage}`}
      />
      <ArticleContentPageComponent article={word} />{" "}
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const wordData = getArticleData(slug, "/content/word");
  return {
    props: {
      word: wordData,
    },
    revalidate: 43200, // validate every 12 hours
  };
}

export function getStaticPaths() {
  const wordFilenames = getArticleFiles("/content/word");

  const slugs = wordFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default WordDetailPage;
