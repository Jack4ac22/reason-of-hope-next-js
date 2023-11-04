import PageTitle from "../../components/ui/page-title";

import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import {
  getAllArticles,
  getArticlesByCategory,
} from "../../utilities/articles-functions";
export default function AllObjectionPage(props) {
  const objectionsSectionOne = props.objectionsSectionOne;
  const objectionsSectionTwo = props.objectionsSectionTwo;
  const objectionsSectionThree = props.objectionsSectionThree;
  const objectionsSectionFour = props.objectionsSectionFour;
  const objectionsSectionFive = props.objectionsSectionFive;
  return (
    <>
      <PageTitle
        title="قضية الخلق"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!"
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />
      <ArticleCardsList articles={objectionsSectionOne} baseUrl="objections" />
    </>
  );
}
export async function getStaticProps() {
  const allObjections = getAllArticles("content/objections");

  const objectionsSectionOne = getArticlesByCategory(
    "الإختلافات-الكمية-والعددية",
    "content/objections",
    "title"
  );

  const objectionsSectionTwo = getArticlesByCategory(
    "أسماء-الأشخاص",
    "content/objections",
    "title"
  );

  const objectionsSectionThree = getArticlesByCategory(
    "توقيت-الأحداث",
    "content/objections",
    "title"
  );

  const objectionsSectionFour = getArticlesByCategory(
    "العلاقة-السببية",
    "content/objections",
    "title"
  );

  const objectionsSectionFive = getArticlesByCategory(
    "إختلافات-التفاصيل",
    "content/objections",
    "title"
  );

  return {
    props: {
      objectionsSectionOne: objectionsSectionOne,
      objectionsSectionTwo: objectionsSectionTwo,
      objectionsSectionThree: objectionsSectionThree,
      objectionsSectionFour: objectionsSectionFour,
      objectionsSectionFive: objectionsSectionFive,
    },
    revalidate: 43200,
  };
}
