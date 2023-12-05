import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page.js";
import {
  getArticleFiles,
  getArticleDataWithRelatedArticles,
} from "../../../utilities/articles-functions.js";
import PageTitle from "../../../components/general-compenents/page-title.js";

function WordDetailPage(props) {
  const { article } = props;
  return (
    <>
      <PageTitle
        title={article.title}
        description={article.description}
        image={`/blog_images/${article.coverImage}`}
      />
      <ArticleContentPageComponent article={article} />{" "}
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const wordData = getArticleDataWithRelatedArticles(slug, "/content/word");
  return {
    props: {
      article: wordData,
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
