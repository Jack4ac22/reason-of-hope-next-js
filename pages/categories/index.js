import {
  getAllCategoriesCount,
  getAllCategoriesarticles,
} from "../../utilities/categories-functions";
export default function AllCategoriesPage(props) {
  return (
    <>
      <h2>categories with count</h2>
      <ul>
        {props.categories.map((category) => (
          <li key={category.category}>
            <span>{category.category}</span>
            <span>: </span>
            <span>{category.count}</span>
          </li>
        ))}
      </ul>

      <h1>all categories</h1>
      <ul>
        {props.allCategories.map((creationArticle) => (
          <li key={creationArticle.category}>
            <span>{creationArticle.category}</span>
            <span>: </span>
            <span>{creationArticle.count}</span>
            <ul>
              {/* check if there is articles before mapping them */}
              {creationArticle.articles.publication.length > 0 && (
                <h4>publication</h4>
              )}
              {creationArticle.articles.publication.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.word.length > 0 && <h4>word</h4>}
              {creationArticle.articles.word.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.logic.length > 0 && <h4>logic</h4>}
              {creationArticle.articles.logic.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.objection.length > 0 && (
                <h4>objection</h4>
              )}
              {creationArticle.articles.objection.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}

              {creationArticle.articles.creation.length > 0 && (
                <h4>creation</h4>
              )}
              {creationArticle.articles.creation.map((article) => (
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
  return {
    props: {
      allCategories: [...allCategories],
      categories: [...categories],
    },
  };
}
