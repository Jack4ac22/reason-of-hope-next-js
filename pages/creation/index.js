import {
  getCreationArticlesBySearchTerm,
  getAllCreationsTags,
  getAllCreationsCategories,
  getCreationArticlesByCategory,
} from "../../utilities/creation-functions";

export default function AllCreationArticlePage(props) {
  return (
    <>
      <h1>all creationArticles</h1>
      <ul>
        {props.allCreationArticles.map((creationArticle) => (
          <li key={creationArticle.title}>{creationArticle.title}</li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const AllTags = getAllCreationsTags();
  //   console.log("ALL TAGS FROM INDEX:   ", AllTags);
  const allCategories = getAllCreationsCategories();
  console.log("ALL CATEGORIES FROM INDEX:   ", allCategories);
  const creationArticlesByCat = getCreationArticlesByCategory(
    "الديناصورات-والتأريخ"
  );
  console.log("creation articles by tag:   ", creationArticlesByCat);
  const creationArticles = getCreationArticlesBySearchTerm("كارل");

  console.log("LENGTH FROM INDEX:   ", creationArticles.length);
  const allCreationArticles = ["hello", "world"];
  return {
    props: {
      allCreationArticles: creationArticles,
    },
  };
}
