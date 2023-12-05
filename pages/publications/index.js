import PublicationsCults from "../../components/pulications-components/publications-main-page-sections/cults";
import PublicationsBooks from "../../components/pulications-components/publications-main-page-sections/books";
import PublicationsStudies from "../../components/pulications-components/publications-main-page-sections/studies";
import { getArticlesByCategory } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";
import BibleVerseHero from "../../components/ui/bible-verse-hero";
import PublicationsPagesList from "../../components/pulications-components/publications-pages-list/publications-pages-list";
export default function PublicationsMainPage(props) {
  const cults_articles = props.cults_articles;
  const books_articles = props.books_articles;
  const studies_articles = props.studies_articles;

  const description =
    "نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من المراجع الموثَّقة والموثوقة.";
  const coverImage = "/blog_images/page-cover.jpg";
  // TODO: add the categories and the subpages with their descriptions
  // TODO: add the descriptions for pages.
  return (
    <>
      <PageTitle title="منشورات" description={description} image={coverImage} />
      <PublicationsPagesList />
      <section className="container">
        <div className="row justify-content-center">
          <BibleVerseHero
            body={
              "فَإِنَّ مَخَافَةَ الرَّبِّ هِيَ رَأْسُ الْمَعْرِفَةِ، أَمَّا الْحَمْقَى فَيَسْتَهِينُونَ بِالْحِكْمَةِ وَالتَّأْدِيبِ."
            }
            reference={"سفر الأمثال ١: ٧"}
            translation={"ترجمة كتاب الحياة"}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <p>
              نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة
              العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل
              الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من
              المراجع الموثَّقة والموثوقة.
            </p>
          </div>
        </div>
      </section>

      <PublicationsBooks books_articles={books_articles} />
      <PublicationsStudies studies_articles={studies_articles} />
      <PublicationsCults cults_articles={cults_articles} />
    </>
  );
}

export async function getStaticProps() {
  const books_articles = getArticlesByCategory("كتب", "/content/publications");
  const studies_articles = getArticlesByCategory(
    "دراسات-عامّة",
    "/content/publications"
  );
  const cults_articles = getArticlesByCategory(
    "الديانات-والطوائف",
    "/content/publications"
  );

  return {
    props: {
      books_articles: books_articles,
      studies_articles: studies_articles,
      cults_articles: cults_articles,
    },
  };
}
