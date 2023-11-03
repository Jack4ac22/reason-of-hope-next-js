import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";

import Link from "next/link";

import {
  // getLogicsBySearchTerm,
  getAllLogicsCategories,
  getLogicsByCategory,
  getAllLogics,
} from "../../utilities/logic-functions";

export default function AllLogicPage(props) {
  return (
    <>
      <ArticleCardsList articles={props.allLogicArticles} baseUrl="/logic" />
    </>
  );
}
export async function getStaticProps() {
  const allLogicCategories = getAllLogicsCategories();
  allLogicCategories.map((category) => {
    const articlesByCategory = getLogicsByCategory(category.category);
    category.articles = articlesByCategory;
  });
  const allLogicArticles = getAllLogics();
  return {
    props: {
      allLogicArticles: allLogicArticles,
    },
  };
}
