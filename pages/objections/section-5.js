import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getArticlesByCategory } from "../../utilities/articles-functions";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
import PageTitle from "../../components/ui/page-title";
import ObjectionsPageSectionFive from "../../components/objections-components/objections-pages-components/objections-page-section-five";

export default function ObjectionsSectionFivePage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="القسم الخامس: الإختلافات في التفاصيل"
        description="نجد في البعض من آيات الكتاب المقدس بعض التفاصيل التي تعطي الانطباع بأنها غير متوافقة مع التفاصيل التي تقدمها آيات آُخرى تتعامل مع ذات الموضوع. ويكون الأمر الغالب هو أن النُّقاد يشيرون إلى الاختلافات في الطرق التي يقوم بها كُتَّاب الأناجيل بتسجيل الأحداث، والأمر الأكيد أنَّه يوجد اختلافات من هذا النوع. لكن السؤال هو: هل هي تناقضات أم أنها اختلافات متوافقة؟"
        image="/blogImages/pexels-photo-6681855.jpeg"
      />
      <ObjectionsPagesList />
      <ObjectionsPageSectionFive />
      <ArticleCardsList articles={articles} baseUrl="objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionFive = getArticlesByCategory(
    "إختلافات-التفاصيل",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionFive,
    },
  };
}
