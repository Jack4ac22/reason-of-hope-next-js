import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
import PageTitle from "../../components/ui/page-title";
import ObjectionsPageSectionFour from "../../components/objections-components/objections-pages-components/objections-page-section-four"

export default function ObjectionsSectionFourPage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="القسم الرابع: الإختلافات بين المُسَبِّبْ والنَّاتِج"
        description="سوف نقوم في هذا القسم بفحص الإدعاءات التي يتم تقديمها بأن الكتاب المقدس يناقض نفسه فيما يختص بالمسببات – أي: مَنْ الشخص أو ما الأمْرُ الذي تسبب بوقوع أحداث معيّنة؟ ونجد أنه يتم تقديم إحدى الآيات على أنها تُقَدِّمُ مُسبِّباً معيناً في الوقت الذي تُقدِّم آية أُخرى مُسبِّباً آخر، فأيٌّ منهما هو الصحيح؟"
        image="/blogImages/creativity-819371_640.jpg"
      />
      <ObjectionsPagesList />
      <ObjectionsPageSectionFour />
      <ArticleCardsList articles={articles} baseUrl="objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionFour = getArticlesByCategory(
    "العلاقة-السببية",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionFour,
    },
  };
}
