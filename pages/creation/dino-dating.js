import PageTitle from "../../components/general-compenents/page-title";
import { getCreationArticlesByCategory } from "../../utilities/creation-functions";

import BibleVerseHero from "../../components/general-components/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import CreationCardsList from "../../components/creation-components/creation-cards-list";

export default function DinoAndDating(props) {
  const articlesByCategoryDino = props.articlesByCategoryDino;
  return (
    <>
      <PageTitle
        title="قضية الخلق والتأريخ والديناصورات"
        description="مجموعة من المقالات  المرتبطة  بالديناصورات وتوافقها مع الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ المستخدمة في النظام العلماني."
        image={`/blog-images/tyrannosaurus-855188_640.jpg`}
      />

      <BibleVerseHero
        body="هُوَذَا بَهِيمُوثُ ٱلَّذِي صَنَعْتُهُ مَعَكَ يَأْكُلُ ٱلْعُشْبَ مِثْلَ ٱلْبَقَرِ."
        reference="التكوين ٦: ١٧"
        translation="ترجمة البستاني ڤاندايك"
      />

      <CreationPagesList />

      <section className="container">
        <div className="px-4 py-5 my-1 text-center">
          <h2 className=" fw-bold text-body-emphasis">الديناصورات والتأريخ</h2>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              يتم استخدام الديناصورات كأداة لنقد التاريخ التوراتي، وذلك بعد أن
              يتم تأريخها إلى عدة ملايين من السنوات.
            </p>
            <p className="lead mb-4">
              تشتمل هذه الفئة على الدراسات المختصة بالديناصورات وتوافقها مع
              الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ
              المستخدمة في النظام العلماني.
            </p>
            <p className="lead mb-4">
              سيضاف إليها جميع الدراسات المختصة بالمستحاثات.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </section>
      <section className="rounded-4 border border-5 mt-3 p-3">
        <CreationCardsList creations={articlesByCategoryDino} />
      </section>
    </>
  );
}
export async function getStaticProps(props) {
  const articlesByCategoryDino = getCreationArticlesByCategory(
    "الديناصورات-والتأريخ"
  );

  return {
    props: {
      articlesByCategoryDino: articlesByCategoryDino,
    },
  };
}
