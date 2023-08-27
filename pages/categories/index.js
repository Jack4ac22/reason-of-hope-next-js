import Link from "next/link";
import { getAllCategoriesCount } from "../../utilities/categories-functions";
export default function AllCategoriesPage(props) {
  return (
    <>
      <h2>categories with count</h2>
      <ul>
        {props.categories.map((category) => (
          <li key={category.category}>
            <Link href={`/categories/${category.category}`}>
            <span>{category.category}</span>
            <span>: </span>
            <span>{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const categories = getAllCategoriesCount();
  return {
    props: {
      categories: [...categories],
    },
  };
}
