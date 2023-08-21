import { get } from "http";
import {
  getPublicationsByTag,
  getAllPublicationsTags,
  getPublicationsByCategory,
  getAllPublicationsCategories,
} from "../../utilities/publications-functions";

export default function AllPublicationPage(props) {
  return (
    <>
      <h2>Categories</h2>
      <ul>
        {props.categories.map((category) => (
          <li key={category.category}>
            {category.category} <span> {category.count}</span>
            <ul>
              {category.articles.map((article) => (
                <li key={article.slug}>{article.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h1>Tags:</h1>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag.tag}>
            {tag.tag} <span> {tag.count}</span>
            <ul>
              {tag.articles.map((article) => (
                <li key={article.slug}>{article.title}</li>
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
  const allCategoriesWithPublications = [];
  allCategories.forEach((category) => {
    const categoryArticles = getPublicationsByCategory(category.category);
    const newCategoryObject = {
      ...category,
      articles: categoryArticles,
    };
    allCategoriesWithPublications.push(newCategoryObject);
  });

  const allTags = getAllPublicationsTags();
  const allTagsWithArticles = [];
  allTags.forEach((tag) => {
    const tagArticles = getPublicationsByTag(tag.tag);
    const newTagObject = {
      ...tag,
      articles: tagArticles,
    };
    allTagsWithArticles.push(newTagObject);
  });
  return {
    props: {
      tags: allTagsWithArticles,
      categories: allCategoriesWithPublications,
    },
  };
}
