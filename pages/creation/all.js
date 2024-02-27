import {getAllArticles}  from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import PageTitle from "../../components/ui/page-title";

export default function AllCreationArticlePage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="جميع مقالات قضية الخلق"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. "
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />

      <CreationPagesList />

      <ArticleCardsList articles={articles} baseUrl="/creation" />
    </>
  );
}
export async function getStaticProps() {
  const allArticlesByTitle = getAllArticles("/content/creation","title");

  return {
    props: {
      articles: allArticlesByTitle,
    },
  };
}
