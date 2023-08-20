import {
  getAllCategoriesCount,
  getAllCategoriesarticles,
} from "../../utilities/categories-functions";
export default function AllCategoriesPage(props) {
  return (
    <>
      <h1>all categories</h1>
      <ul>
        {props.allCategories.map((creationArticle) => (
          <li key={creationArticle.category}>
            <span>{creationArticle.category}</span>
            <span>: </span>
            <span>{creationArticle.count}</span>
            <ul>
              {creationArticle.articles.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
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
  const categories = getAllCategoriesCount();
  const allCategories = getAllCategoriesarticles();
  console.log("ALL CATS Art:   ", allCategories);
  return {
    props: {
      allCategories: [...allCategories],
    },
  };
}
