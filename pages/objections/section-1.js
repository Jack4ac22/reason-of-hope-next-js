import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import ObjectionsPageSectionOne from "../../components/objections-components/objections-pages-components/objections-page-section-one";
import ObjectionsPagesList from "../../components/objections-components/objections-pages-list/objections-pages-list";
import PageTitle from "../../components/ui/page-title";

export default function ObjectionsSectionOnePage(props) {
  const articles = props.articles;
  return (
    <>
      <PageTitle
        title="القسم الأول: الإختلافات الكمية أو العددية"
        description="يتناول هذا القسم الإدعاءات القائلة بأنه يوجد تناقض بين تصريحات آيات الكتاب المقدس عن تعداد بعض الأمور المختلفة."
        image="/blog_images/pexels-photo-6623835.jpeg"
      />
      <ObjectionsPagesList />
      <ObjectionsPageSectionOne />
      <ArticleCardsList articles={articles} baseUrl="/objections" />
    </>
  );
}
export async function getStaticProps() {
  const objectionsSectionOne = getArticlesByCategory(
    "الإختلافات-الكمية-والعددية",
    "content/objections",
    "title"
  );
  return {
    props: {
      articles: objectionsSectionOne,
    },
  };
}
