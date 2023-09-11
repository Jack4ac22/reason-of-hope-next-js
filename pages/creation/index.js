import CreationCardsList from "../../components/creation-components/creation-cards-list";
import Link from "next/link";
import {
  // getAllCreationsCategories,
  // getCreationArticlesByCategory,
  getAllCreationArticles,
} from "../../utilities/creation-functions";

export default function AllCreationArticlePage(props) {
  const creationArticles = props.creationArticles;
  return (
    <>
      <h1>مقالات الخلق:</h1>
      <ul>
        <CreationCardsList creations={creationArticles} />
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  // const allCategories = getAllCreationsCategories();
  // allCategories.map((category) => {
  //   const articlesByCategory = getCreationArticlesByCategory(category.category);
  //   category.articles = articlesByCategory;
  // });
  const allArticlesByTitle = getAllCreationArticles("slug");

  return {
    props: {
      creationArticles: allArticlesByTitle,
    },
  };
}
