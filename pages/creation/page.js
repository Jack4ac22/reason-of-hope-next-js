import { randomArticlesFromArray } from "../../utilities/general-functions";
import { getAllCreationArticles } from "../../utilities/creation-functions";
import AutoplayingCarousel from "../../components/general-compenents/carousels/Autoplaying-carousels";

export default function MainCreationOne(props) {
  const creationArticles = props.creationArticles;
  return (
    <>
      <AutoplayingCarousel
        articles={creationArticles}
        id={"creations-articles"}
      />
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
