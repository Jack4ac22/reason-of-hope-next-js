import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getAllArticles } from "../../utilities/articles-functions";

export default function ObjectionsSectionOnePage(props) {
  console.log(props.allObjections[0]);
  return (
    <>
      <ArticleCardsList articles={props.allObjections} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const allObjections = getAllArticles('content/objections');
  return {
    props: {
      allObjections: allObjections,
    },
  };
}
