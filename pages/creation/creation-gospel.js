import {getArticlesByCategory}  from "../../utilities/articles-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import BibleVerseHero from "../../components/ui/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import PageTitle from "../../components/ui/page-title";
export default function CreationGospel(props) {
  const articles = props.articles;
  return (
    <>
      <>
        <PageTitle
          title="قضية الخلق والكتاب المقدس والإنجيل"
          description="مجموعة من المقالات  المرتبطة بكيفية مُقاربة الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع."
          image={`/blog_images/bible-2110439_640.jpg`}
        />

        <BibleVerseHero
          body="لأنَّ الرّبَّ في ستَّةِ أيّامٍ خلَقَ السَّماواتِ والأرضَ والبحرَ وجميعَ ما فيها، وفي اليومِ السَّابعِ ا‏ستراحَ. ولذلِكَ بارَكَ الرّبُّ يومَ السَّبتِ وكَرَّسَهُ لَه‌."
          reference="سفر الخروج ٢٠: ١١"
          translation="الترجمة العربية المشتركة"
        />
      </>
      <>
        <CreationPagesList />

        <section className="container">
          <div className="px-4 py-5 my-1 text-center">
            <h2 className=" fw-bold text-body-emphasis">
              الكتاب المقدس والإنجيل
            </h2>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                يتعرض الكتاب المقدس لهجمات ممنهجة وشركة من قِبَل العلمانيّين
                والمُتديّنين المُساومين، إلا أنَّ كلمة الله لا تسقط.
              </p>
              <p className="lead mb-4">
                تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة
                الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط
                هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان
                بالفداء المجاني بالإيمان بالمسيح يسوع.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
            </div>
          </div>
        </section>
        <section className="rounded-4 border border-5 mt-3 p-3 mb-2">
          <ArticleCardsList
            articles={articles}
            baseUrl="creation"
          />
        </section>
      </>
    </>
  );
}
export async function getStaticProps() {
  const articles = getArticlesByCategory(
    "الكتاب-المقدس-والإنجيل", "/content/creation"
  );

  return {
    props: {
      articles: articles,
    },
    revalidate: 43200,
  };
}
