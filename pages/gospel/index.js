import ArticleContentPageComponent from "../../components/article-components/single-article-page/article-content-page";
import { getArticleData } from "../../utilities/articles-functions";

export default function objectionArtilePage(props) {
  const article = props.article;
  return (
    <>
      <ArticleContentPageComponent article={article} />
    </>
  );
}

export function getStaticProps() {
  const article = getArticleData("gospel", "/content/pages-content");
  return {
    props: {
      article: article,
    },
    revalidate: 30000,
  };
}
