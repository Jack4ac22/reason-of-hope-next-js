import { getAllPublications } from "../../utilities/publications-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
export default function AllPublicationPage(props) {
  return (
    <>
      <ArticleCardsList
        articles={props.allPublications}
        baseUrl="/publications"
      />
    </>
  );
}
export async function getStaticProps() {
  const allPublications = getAllPublications();

  return {
    props: {
      allPublications: allPublications,
    },
  };
}
