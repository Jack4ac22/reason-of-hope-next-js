import {
  // getLogicsBySearchTerm,
  getAllLogicsTags,
  getAllLogicsCategories,
  getLogicsByTag,
  getLogicsByCategory,
} from "../../utilities/logic-functions";

export default function AllLogicPage(props) {
  return (
    <>
      <h1>all logics by category</h1>
      <ul>
        {props.allLogicCategories.map((logic) => (
          <li key={logic.category}>
            {logic.category}
            <ol>
              {logic.articles.map((article) => (
                <li key={article.title}>{article.title}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>

      <h1>all logics by tag</h1>
      <ul>
        {props.allLogicTags.map((logic) => (
          <li key={logic.tag}>
            {logic.tag}
            <ol>
              {logic.articles.map((article) => (
                <li key={article.title}>{article.title}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allLogicTags = getAllLogicsTags();
  allLogicTags.map((tag) => {
    const articlesByTag = getLogicsByTag(tag.tag);
    tag.articles = articlesByTag;
  });
  const allLogicCategories = getAllLogicsCategories();
  allLogicCategories.map((category) => {
    const articlesByCategory = getLogicsByCategory(category.category);
    category.articles = articlesByCategory;
  });
  return {
    props: {
      allLogicTags: allLogicTags,
      allLogicCategories: allLogicCategories,
    },
  };
}
