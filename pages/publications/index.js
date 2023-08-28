import Link from "next/link";
import {
  getPublicationsByCategory,
  getAllPublicationsCategories,
} from "../../utilities/publications-functions";

export default function AllPublicationPage(props) {
  return (
    <>
      <h1>المنشورات بحسب التصنيف:</h1>
      <ul>
        {props.allPublicationsCategories.map((publicationArticle) => (
          <li className="alert alert-light" key={publicationArticle.category}>
            <Link
              href={`/categories/${publicationArticle.category}`}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              {publicationArticle.category.replace("-", " ")}
            </Link>
            <span> {publicationArticle.count}</span>
            <ul>
              {publicationArticle.articles.map((article) => (
                <li key={article.title}>
                  <span>{article.title} </span>
                  <Link className="" href={`/publications/${article.slug}`}>
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
export async function getStaticProps() {
  const allCategories = getAllPublicationsCategories();

  allCategories.map((category) => {
    const articlesByCategory = getPublicationsByCategory(category.category);
    category.articles = articlesByCategory;
  });

  return {
    props: {
      allPublicationsCategories: allCategories,
    },
  };
}
