import Link from "next/link";
import {
  // getObjectionsBySearchTerm,
  getAllObjectionsCategories,
  getObjectionsByCategory,
} from "../../utilities/objections-functions";

export default function AllObjectionPage(props) {
  return (
    <>
      <h1> الإعتراضات بحسب التصنيف: </h1>
      <ul>
        {props.allObjectionsCategories.map((objectionArticle) => (
          <li className="alert alert-light" key={objectionArticle.category}>
            <Link
              href={`/objections/${objectionArticle.category}`}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <span>{objectionArticle.category.replace("-", " ")}</span>
            </Link>
            <span>: {objectionArticle.count}</span>
            <ul>
              {objectionArticle.articles.map((article) => (
                <li key={article.title}>
                  <span>{article.title} </span>
                  <Link className="" href={`/objections/${article.slug}`}>
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
  const allObjectionsCategories = getAllObjectionsCategories();
  allObjectionsCategories.map((category) => {
    const articlesByCategory = getObjectionsByCategory(category.category);
    category.articles = articlesByCategory;
  });
  return {
    props: {
      allObjectionsCategories: allObjectionsCategories,
    },
  };
}
