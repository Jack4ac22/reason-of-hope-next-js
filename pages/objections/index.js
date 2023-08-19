import {
  getObjectionsBySearchTerm,
  getAllObjectionsTags,
  getAllObjectionsCategories,
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
  const allObjectionTags = getAllObjectionsTags();
  console.log("ALL OBJECTION TAGS FROM INDEX:   ", allObjectionTags);
  const allObjectionCategories = getAllObjectionsCategories();
  console.log(
    "ALL OBJECTION CATEGORIES FROM INDEX:   ",
    allObjectionCategories
  );
  const objections = getObjectionsBySearchTerm("الله");
  // console.log("ALLOBJECTITIONS FROM INDEX:   ", objections);
  const allObjections = ["hello", "world"];
  return {
    props: {
      allObjections: objections,
    },
  };
}
