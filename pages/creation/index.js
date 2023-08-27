import CreationCardsList from "../../components/creation-components/creation-cards-list";
import Link from "next/link";
import {
  getAllCreationsCategories,
  getCreationArticlesByCategory,
} from "../../utilities/creation-functions";

export default function AllCreationArticlePage(props) {
  return (
    <>
      <h1>مقالات الخلق بحسب التصنيف:</h1>
      <ul>
        {props.allCreationArticlesCategories.map((creationArticle) => (
          <li className="alert alert-light" key={creationArticle.category}>
            <Link
              href={`/categories/${creationArticle.category}`}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              {creationArticle.category.replace("-", " ")}
            </Link>
            <span> {creationArticle.count}</span>
            <ul>
            <CreationCardsList creations={creationArticle.articles} />
              
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allCategories = getAllCreationsCategories();

  allCategories.map((category) => {
    const articlesByCategory = getCreationArticlesByCategory(category.category);
    category.articles = articlesByCategory;
  });

  return {
    props: {
      allCreationArticlesCategories: allCategories,
    },
  };
}
