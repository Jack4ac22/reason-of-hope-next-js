import {
  getObjectionsBySearchTerm,
  getAllObjectionsTags,
  getAllObjectionsCategories,
  getObjectionsByCategory,
} from "../../utilities/objections-functions";

export default function AllObjectionPage(props) {
  return (
    <>
      <h1>all objections</h1>
      <ul>
        {props.allObjections.map((objection) => (
          <li key={objection.title}>{objection.title}</li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allObjectionsByCat = getObjectionsByCategory(
    "تناقضات"
  );
  console.log("objections by cat:   ", allObjectionsByCat.length);
  const allObjectionTags = getAllObjectionsTags();
  // console.log("ALL OBJECTION TAGS FROM INDEX:   ", allObjectionTags);
  const allObjectionCategories = getAllObjectionsCategories();
  console.log(
    "ALL OBJECTION CATEGORIES FROM INDEX:   ",
    allObjectionCategories
  );
  const objections = getObjectionsBySearchTerm("يملك");
  // console.log("ALLOBJECTITIONS FROM INDEX:   ", objections);
  return {
    props: {
      allObjections: allObjectionsByCat,
    },
  };
}
