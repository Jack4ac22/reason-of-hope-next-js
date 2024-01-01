import { getArticlesByCategory } from "../../utilities/articles-functions";
import PublicationsPagesList from "../../components/pulications-components/publications-pages-list/publications-pages-list";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";
export default function Studies(props) {
  const studies_articles = props.studies_articles;
  const description =
    "مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على مؤلفات لنخبة من اللاهوتيين المُحافظين.";
  const coverImage = "/blog_images/books-1850645_640.jpg";
  return (
    <>
      <PageTitle
        title="دراسات كتابية"
        description={description}
        image={coverImage}
      />
      <PublicationsPagesList />

      <section>
        <p className="h4">
          نقدم إليكم مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على مؤلفات
          لنخبة من اللاهوتيين المُحافظين.
        </p>
      </section>
      <section className="mt-5">
        <ArticleCardsList articles={studies_articles} baseUrl="/publications" />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const studies_articles = getArticlesByCategory(
    "دراسات-عامّة",
    "/content/publications"
  );

  return {
    props: {
      studies_articles: studies_articles,
    },
  };
}
