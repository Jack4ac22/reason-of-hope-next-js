import { getAllArticles } from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";

export default function AllWordPage(props) {
  const articles = props.articles;
  const description =
    "مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر.";
  return (
    <>
      <PageTitle
        title="كلمة ورسالة"
        description={description}
        image="/blogImages/page-cover.jpg"
      />
      <section className="container">
        <div className="row">
          <div className="col-12">
            <p className="h3 text-center my-4">{description}</p>
          </div>
        </div>
      </section>
      <ArticleCardsList articles={articles} baseUrl="words" />
    </>
  );
}
export async function getStaticProps() {
  const articles = getAllArticles("/content/word");

  return {
    props: {
      articles: articles,
    },
  };
}
