import { getAllArticles } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";

export default function AllLogicPage(props) {
  const articles = props.articles;
  return (
    <>
    <PageTitle
    title= "علم المنطق والأخطاء المنطقية"
    description= "إن المنطق السليم هو من المهارات الذهنية التي باتت تُعتَبر مفقودةً في عالمنا المعاصر، ولابد للمسيحيّين المؤمنين بالكتاب المقدس أن يكونوا على استعدادا لكشف الأخطاء المنطقية والتنبه من عدم ارتكابها. إليكم سلسلة من المنشورات المصورة والمكتوبة والتي تتعامل مع علم المنطق والمغالطات المنطقية التي يتم ارتكابها بشكل خاص في الجدل الدائر حول موضوع الأصول."
    image="/blog_images/roh.png"/>
      <ArticleCardsList articles={articles} baseUrl="logic" />
    </>
  );
}
export async function getStaticProps() {
  const articles = getAllArticles("/content/logic");

  return {
    props: {
      articles: articles,
    },
  };
}
