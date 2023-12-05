import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import BibleVerseHero from "../../components/ui/bible-verse-hero";
import ObjectionsPageMainSection from "../../components/objections-components/objections-main-page-sections/objections-page-main-section";
import PageTitle from "../../components/ui/page-title";
import { randomArticlesFromArray } from "../../utilities/general-functions";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";

export default function AllObjectionPage(props) {
  const objectionsSectionOne = props.objectionsSectionOne;
  const objectionsSectionTwo = props.objectionsSectionTwo;
  const objectionsSectionThree = props.objectionsSectionThree;
  const objectionsSectionFour = props.objectionsSectionFour;
  const objectionsSectionFive = props.objectionsSectionFive;
  return (
    <>
      <>
        <PageTitle
          title="التناقضات المفترضة في الكتاب المقدس"
          description="السلسلة من المقاطع المصورة تقدم لكم نظرة عامة على هذه الآيات بالإضافة إلى تحليل منطقي لما يُعتقد بأنَّه تناقض بين الآيات وذلك بالإعتماد على علم المنطق."
          image="/blog_images/bible-2110439_640.jpg"
        />
        <BibleVerseHero
          body="أمّا يَسوعُ فهوَ هوَ، بِالأمسِ واليومِ وإلى الأبَدِ."
          reference="الرسالة إلى العبرانيين 13: 8"
          translation="الترجمة العربية المشتركة"
        />
        <ObjectionsPagesList />
      </>
      <>
        <ObjectionsPageMainSection
          objectionsSectionOne={objectionsSectionOne}
          objectionsSectionTwo={objectionsSectionTwo}
          objectionsSectionThree={objectionsSectionThree}
          objectionsSectionFour={objectionsSectionFour}
          objectionsSectionFive={objectionsSectionFive}
        />
      </>
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionOne = getArticlesByCategory(
    "الإختلافات-الكمية-والعددية",
    "content/objections",
    "title"
  );
  const RandomObjectionsSectionOne = randomArticlesFromArray(
    objectionsSectionOne,
    3
  );

  const objectionsSectionTwo = getArticlesByCategory(
    "أسماء-الأشخاص",
    "content/objections",
    "title"
  );
  const RandomObjectionsSectionTwo = randomArticlesFromArray(
    objectionsSectionTwo,
    3
  );

  const objectionsSectionThree = getArticlesByCategory(
    "توقيت-الأحداث",
    "content/objections",
    "title"
  );
  const RandomObjectionsSectionThree = randomArticlesFromArray(
    objectionsSectionThree,
    3
  );

  const objectionsSectionFour = getArticlesByCategory(
    "العلاقة-السببية",
    "content/objections",
    "title"
  );
  const RandomObjectionsSectionFour = randomArticlesFromArray(
    objectionsSectionFour,
    3
  );

  const objectionsSectionFive = getArticlesByCategory(
    "إختلافات-التفاصيل",
    "content/objections",
    "title"
  );
  const RandomObjectionsSectionFive = randomArticlesFromArray(
    objectionsSectionFive,
    3
  );

  return {
    props: {
      objectionsSectionOne: RandomObjectionsSectionOne,
      objectionsSectionTwo: RandomObjectionsSectionTwo,
      objectionsSectionThree: RandomObjectionsSectionThree,
      objectionsSectionFour: RandomObjectionsSectionFour,
      objectionsSectionFive: RandomObjectionsSectionFive,
    },
    revalidate: 43200,
  };
}
