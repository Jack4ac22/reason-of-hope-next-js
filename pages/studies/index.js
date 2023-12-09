import { getAllArticles } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";

export default function AllBiblicalStudiesPage(props) {
  const articles = props.articles;
  const description =
    "مجموعة من الدراسات التي تتناول عدداً من المواضيع المرتبطة بالكتاب المقدس.";
  return (
    <>
      <PageTitle
        title="دراسات كتابية"
        description={description}
        image="/blog_images/bible-4249164_640.jpg"
      />
      <section className="container">
        <div className="row">
          <div className="col-12">
            <p className="h3 text-center my-4">{description}</p>
          </div>
        </div>
      </section>
      <ArticleCardsList articles={articles} baseUrl="studies" />
    </>
  );
}
export async function getStaticProps() {
  const articles = getAllArticles("/content/biblical-studies");

  return {
    props: {
      articles: articles,
    },
  };
}
