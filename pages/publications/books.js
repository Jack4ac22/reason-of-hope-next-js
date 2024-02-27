import { getArticlesByCategory } from "../../utilities/articles-functions";
import PublicationsPagesList from "../../components/pulications-components/publications-pages-list/publications-pages-list";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";
export default function Books(props) {
  const books_articles = props.books_articles;
  const description = "";
  const coverImage = "/blog_images/book-1659717_640.jpg";
  return (
    <>
      <PageTitle
        title="الكتب المُترجمة"
        description={description}
        image={coverImage}
      />
      <PublicationsPagesList />
      <section>
        <p className="h4">
          نقدم إليكم نخبة من الكتب والكُتيّبات المترجمة من اللغة الإنجليزية،
          والتي تتعامل مع مواضيع مختلفة ومهمة مثل قضيّة الأصول وقضية التعامل مع
          سفر التكوين والكتاب المقدس.
        </p>
      </section>
      <section className="mt-5">
        <ArticleCardsList articles={books_articles} baseUrl="/publications" />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const books_articles = getArticlesByCategory("كتب", "/content/publications");

  return {
    props: {
      books_articles: books_articles,
    },
  };
}
