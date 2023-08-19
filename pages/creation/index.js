import { getCreationArticlesBySearchTerm, getAllCreationTags,
    getAllCreationCategories } from "../../utilities/creation-functions";

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
  const AllTags = getAllCreationTags();
//   console.log("ALL TAGS FROM INDEX:   ", AllTags);
  const allCategories = getAllCreationCategories();
    console.log("ALL CATEGORIES FROM INDEX:   ", allCategories);

    const creationArticles = getCreationArticlesBySearchTerm("كارل");
//   console.log("ALLOBJECTITIONS FROM INDEX:   ", creationArticles);
  console.log("LENGTH FROM INDEX:   ", creationArticles.length);
  const allCreationArticles = ["hello", "world"];
  return {
    props: {
      allCreationArticles: creationArticles,
    },
  };
}
