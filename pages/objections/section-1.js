import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getArticlesByCategory } from "../../utilities/articles-functions";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
export default function ObjectionsSectionOnePage(props) {
  const articles = props.articles;
  return (
    <>
      <ObjectionsPagesList />
      <ArticleCardsList articles={articles} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionOne = getArticlesByCategory(
    "الإختلافات-الكمية-والعددية",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionOne,
    },
  };
}
