import {
  // getObjectionsBySearchTerm,
  getAllObjectionsTags,
  getAllObjectionsCategories,
  getObjectionsByTag,
  getObjectionsByCategory,
} from "../../utilities/objections-functions";

export default function AllObjectionPage(props) {
  return (
    <>
      <h1>Objections Categories</h1>
      <ul>
        {props.allObjectionCategories.map((objection) => (
          <li key={objection.category}>
            {objection.category} <span> {objection.count}</span>
            <ol>
              {objection.articles.map((article) => (
                <li key={article.title}>{article.title}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>

      <h1>Objections Tags</h1>
      <ul>
        {props.allObjectionTags.map((objection) => (
          <li key={objection.tag}>
            {objection.tag} <span> {objection.count}</span>
            <ol>
              {objection.articles.map((article) => (
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
  const allObjectionTags = getAllObjectionsTags();
  allObjectionTags.map((tag) => {
    const articlesByTag = getObjectionsByTag(tag.tag);
    tag.articles = articlesByTag;
  });
  const allObjectionCategories = getAllObjectionsCategories();
  allObjectionCategories.map((category) => {
    const articlesByCategory = getObjectionsByCategory(category.category);
    category.articles = articlesByCategory;
  });

  return {
    props: {
      allObjectionTags: allObjectionTags,
      allObjectionCategories: allObjectionCategories,
    },
  };
}
