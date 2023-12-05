import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";

export default function PublicationsMainPage(props) {
  const description =
    "نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من المراجع الموثَّقة والموثوقة.";
  const coverImage = "/blogImages/page-cover.jpg";
  // TODO: add the categories and the subpages with their descriptions
  // TODO: add the descriptions for pages.
  return (
    <>
      <PageTitle title="منشورات" description={description} image={coverImage} />
      <ArticleCardsList
        articles={props.allCults}
        baseUrl="publications"
      />
    </>
  );
}

export async function getStaticProps() {
  const allBooks = getArticlesByCategory("كتب", "/content/publications");
  const allStudies = getArticlesByCategory(
    "دراسات-عامّة",
    "/content/publications"
  );
  const allCults = getArticlesByCategory(
    "الديانات-والطوائف",
    "/content/publications"
  );

  return {
    props: {
      allBooks: allBooks,
      allStudies: allStudies,
      allCults: allCults
    },
  };
}
