import Link from "next/link";

import {
  // getLogicsBySearchTerm,
  getAllLogicsCategories,
  getLogicsByCategory,
} from "../../utilities/logic-functions";

export default function AllLogicPage(props) {
  return (
    <>
      <h1>مقالات المنطق بحسب التصنيف:</h1>
      <ul>
        {props.allLogicCategories.map((logicArticle) => (
          <li className="alert alert-light" key={logicArticle.category}>
            <Link
              href={`/logic/${logicArticle.category}`}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <span>{logicArticle.category.replace("-", " ")}</span>
            </Link>
            <span>: {logicArticle.count}</span>
            <ul>
              {logicArticle.articles.map((article) => (
                <li key={article.title}>
                  <span>{article.title} </span>
                  <Link className="" href={`/logic/${article.slug}`}>
                    اقرأ اكثر
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allLogicCategories = getAllLogicsCategories();
  allLogicCategories.map((category) => {
    const articlesByCategory = getLogicsByCategory(category.category);
    category.articles = articlesByCategory;
  });
  return {
    props: {
      allLogicCategories: allLogicCategories,
    },
  };
}
