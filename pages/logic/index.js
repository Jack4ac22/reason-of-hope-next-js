import {
  getLogicsBySearchTerm,
  getAllLogicsTags,
  getAllLogicsCategories,
} from "../../utilities/logic-functions";

export default function AllLogicPage(props) {
  return (
    <>
      <h1>all logics</h1>
      <ul>
        {props.allLogics.map((logic) => (
          <li key={logic.title}>{logic.title}</li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allLogicTags = getAllLogicsTags();
  console.log("ALL OBJECTION TAGS FROM INDEX:   ", allLogicTags);
  const allLogicCategories = getAllLogicsCategories();
  console.log(
    "ALL OBJECTION CATEGORIES FROM INDEX:   ",
    allLogicCategories
  );
  const logics = getLogicsBySearchTerm("الله");
  // console.log("ALLOBJECTITIONS FROM INDEX:   ", logics);
  const allLogics = ["hello", "world"];
  return {
    props: {
      allLogics: logics,
    },
  };
}
