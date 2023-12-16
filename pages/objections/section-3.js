import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import { getArticlesByCategory } from "../../utilities/articles-functions";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
import PageTitle from "../../components/ui/page-title";
import ObjectionsPageSectionThree from "../../components/objections-components/objections-pages-components/objections-page-section-three";

export default function ObjectionsSectionThreePage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="القسم الثالث: الإختلافات في توقيت الأحداث"
        description="يتم في الكثير من الأحيان تقديم تصريحات تفيد بأن الكتاب المُقدَّس يناقض نفسه فيما يتعلق بتوقيت الأحداث التاريخية التي ينقلها لنا. فلنفترض أن إحدى آيات الكتاب المُقدَّس تقول بأن الحدث (أ) قد وقع قبل الحدث (ب)، و في الوقت عينه توجد آية أُخرى تُصرَّح بأن الحدث (ب) قد وقع أولاً، ألن يتسبب هذا الأمر مشكلة؟"
        image="/blog_images/pexels-photo-707676.jpeg"
      />
      <ObjectionsPagesList />
      <ObjectionsPageSectionThree />
      <ArticleCardsList articles={articles} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionThree = getArticlesByCategory(
    "توقيت-الأحداث",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionThree,
    },
  };
}
