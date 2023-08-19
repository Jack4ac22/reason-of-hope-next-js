import {
  getPublicationsBySearchTerm,
  getAllPublicationsTags,
  getAllPublicationsCategories,
} from "../../utilities/publications-functions";

export default function AllPublicationPage(props) {
  return (
    <>
      <h1>all publications</h1>
      <ul>
        {props.allPublications.map((publication) => (
          <li key={publication.title}>{publication.title}</li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allPublicationTags = getAllPublicationsTags();
  console.log("ALL OBJECTION TAGS FROM INDEX:   ", allPublicationTags);
  const allPublicationCategories = getAllPublicationsCategories();
  console.log(
    "ALL OBJECTION CATEGORIES FROM INDEX:   ",
    allPublicationCategories
  );
  const publications = getPublicationsBySearchTerm("");
  // console.log("ALLOBJECTITIONS FROM INDEX:   ", publications);
  const allPublications = ["hello", "world"];
  return {
    props: {
      allPublications: publications,
    },
  };
}
