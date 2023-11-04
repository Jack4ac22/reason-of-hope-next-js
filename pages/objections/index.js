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
      <ArticleCardsList articles={props.allObjections} baseUrl="/objections" />
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
  };
}
