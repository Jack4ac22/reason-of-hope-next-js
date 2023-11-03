import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getAllObjections } from "../../utilities/objections-functions";

export default function AllObjectionPage(props) {
  console.log(props.allObjections[0]);
  return (
    <>
      <ArticleCardsList articles={props.allObjections} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const allObjections = getAllObjections();
  return {
    props: {
      allObjections: allObjections,
    },
  };
}
