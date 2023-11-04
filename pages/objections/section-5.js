import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getArticlesByCategory } from "../../utilities/articles-functions";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
export default function ObjectionsSectionFivePage(props) {
  const articles = props.articles;
  return (
    <>
      <ObjectionsPagesList />
      <ArticleCardsList articles={articles} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionFive = getArticlesByCategory(
    "إختلافات-التفاصيل",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionFive,
    },
  };
}
