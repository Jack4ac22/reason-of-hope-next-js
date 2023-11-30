import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import ObjectionsPageSectionTwo from "../../components/objections-components/objections-pages-components/objections-page-section-two";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
import PageTitle from "../../components/ui/page-title";

export default function ObjectionsSectionTwoPage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="القسم الثاني: الإختلافات في أسماء الأشخاص والمواقع، والأنساب"
        description="يتناول هذا القسم الإدعاءات القائلة بأن الكتاب المُقدَّس يخلط بين أسماء الأشخاص والمواقع، أو أنه يذكر بشكل خاطئ صلات القُرْبى بين أشخاص مُعَيَّنين."
        image="/blogImages/pexels-photo-2127869.jpeg"
      />
      <ObjectionsPagesList />
      <ObjectionsPageSectionTwo />
      <ArticleCardsList articles={articles} baseUrl="objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionTwo = getArticlesByCategory(
    "أسماء-الأشخاص",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionTwo,
    },
  };
}
