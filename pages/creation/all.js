import CreationCardsList from "../../components/creation-components/creation-cards-list";
import { getAllCreationArticles } from "../../utilities/creation-functions";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import PageTitle from 
 "../../components/ui/page-title"

export default function AllCreationArticlePage(props) {
  const creationArticles = props.creationArticles;
  return (
    <>
      <PageTitle
        title="جميع مقالات قضية الخلق"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. "
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />

      <CreationPagesList />
      <ul>
        <CreationCardsList creations={creationArticles} />
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const allArticlesByTitle = getAllCreationArticles("slug");

  return {
    props: {
      creationArticles: allArticlesByTitle,
    },
  };
}
