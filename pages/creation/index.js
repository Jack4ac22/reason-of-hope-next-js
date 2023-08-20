import {
  // getCreationArticlesBySearchTerm,
  getAllCreationsTags,
  getAllCreationsCategories,
  getCreationArticlesByCategory,
  getCreationArticlesByTag,
} from "../../utilities/creation-functions";

export default function AllCreationArticlePage(props) {
  return (
    <>
      <h1>all Categories</h1>
      <ul>
        {props.allCreationArticlesCategories.map((creationArticle) => (
          <li key={creationArticle.category}>
            {creationArticle.category}
            <span> {creationArticle.count}</span>
            <ul>
              {creationArticle.articles.map((article) => (
                <li key={article.title}>{article.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h1>all Tags</h1>
      <ul>
        {props.allCreationArticlesTags.map((creationArticle) => (
          <li key={creationArticle.tag}>
            {creationArticle.tag}
            <span> {creationArticle.count}</span>
            <ul>
              {creationArticle.articles.map((article) => (
                <li key={article.title}>{article.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allTags = getAllCreationsTags();

  allTags.map((tag) => {
    const articlesByTag = getCreationArticlesByTag(tag.tag);
    tag.articles = articlesByTag;
  });

  const allCategories = getAllCreationsCategories();

  allCategories.map((category) => {
    const articlesByCategory = getCreationArticlesByCategory(category.category);
    category.articles = articlesByCategory;
  });

  return {
    props: {
      allCreationArticlesTags: allTags,
      allCreationArticlesCategories: allCategories,
    },
  };
}
