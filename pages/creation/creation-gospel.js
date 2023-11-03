import PageTitle from 
 "../../components/ui/page-title"
import { getCreationArticlesByCategory } from "../../utilities/creation-functions";

import BibleVerseHero from "../../components/general-components/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import CreationCardsList from "../../components/creation-components/creation-cards-list";

export default function CreationGospel(props) {
  const articlesByCategoryGospel = props.articlesByCategoryGospel;
  return (
    <>
      <PageTitle
        title="قضية الخلق والكتاب المقدس والإنجيل"
        description="مجموعة من المقالات  المرتبطة بكيفية مُقاربة الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع."
        image={`/blog-images/bible-2110439_640.jpg`}
      />

      <BibleVerseHero
        body="لأنَّ الرّبَّ في ستَّةِ أيّامٍ خلَقَ السَّماواتِ والأرضَ والبحرَ وجميعَ ما فيها، وفي اليومِ السَّابعِ ا‏ستراحَ. ولذلِكَ بارَكَ الرّبُّ يومَ السَّبتِ وكَرَّسَهُ لَه‌."
        reference="سفر الخروج ٢٠: ١١"
        translation="الترجمة العربية المشتركة"
      />

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
              تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة الكتاب
              المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية
              بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء
              المجاني بالإيمان بالمسيح يسوع.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </section>
      <section className="rounded-4 border border-5 mt-3 p-3">
        <CreationCardsList creations={articlesByCategoryGospel} />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const articlesByCategoryGospel = getCreationArticlesByCategory(
    "الكتاب-المقدس-والإنجيل"
  );

  return {
    props: {
      articlesByCategoryGospel: articlesByCategoryGospel,
    }, revalidate: 43200, 
  };
}
