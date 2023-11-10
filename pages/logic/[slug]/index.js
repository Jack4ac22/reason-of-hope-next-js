import ArticleContentPageComponent from "../../../components/article-components/single-article-page/article-content-page.js";
import {
  getArticleFiles,
  getArticleData,
} from "../../../utilities/articles-functions.js";
import PageTitle from "../../../components/general-compenents/page-title.js";

export default function LogicArtilePage(props) {
  const { article } = props;
  return (
    <>
    <PageTitle
        title={article.title}
        description={article.description}
        image={`/blog-images/${article.coverImage}`}
      />
      <ArticleContentPageComponent article={article} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const article = getArticleData(slug, "/content/logic");
  return {
    props: {
      article: article,
    },
    revalidate: 43200, // validate every 12 hours
  };
}

export function getStaticPaths() {
  const logicArticleFilenames = getArticleFiles("/content/logic");
  const slugs = logicArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
