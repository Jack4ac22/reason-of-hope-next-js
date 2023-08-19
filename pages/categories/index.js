import { getAllCategoriesarticles } from "../../utilities/categories-functions";
export default function AllCategoriesPage(props) {
  return (
    <>
      <h1>all categories</h1>
      {/* <ul>
        {props.allCategories.map((creationArticle) => (
          <li key={creationArticle.title}>{creationArticle.title}</li>
        ))}
      </ul> */}
    </>
  );
}
export async function getStaticProps(props) {
  const categories = getAllCategoriesarticles();
  return {
    props: {
      allCategories: [...categories],
    },
  };
}
