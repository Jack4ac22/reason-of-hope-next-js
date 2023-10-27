import { randomArticlesFromArray } from "../../utilities/general-functions";
import { getAllCreationArticles } from "../../utilities/creation-functions";
import AutoplayingCarousel from "../../components/general-compenents/carousels/Autoplaying-carousels";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";

export default function MainCreationOne(props) {
  const creationArticles = props.creationArticles;
  return (
    <>
      <CreationPagesList />
    </>
  );
}

export async function getStaticProps(props) {
  const allArticlesByTitle = getAllCreationArticles("slug");
  const randomArticles = randomArticlesFromArray(allArticlesByTitle, 3);

  return {
    props: {
      creationArticles: randomArticles,
    },
  };
}
