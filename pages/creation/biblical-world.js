import PageTitle from 
 "../../components/ui/page-title"
import { getCreationArticlesByCategory } from "../../utilities/creation-functions";

import BibleVerseHero from "../../components/general-components/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import CreationCardsList from "../../components/creation-components/creation-cards-list";

export default function BiblicalWorld(props) {
  const articlesByCategoryBiblicalWorld = props.articlesByCategoryBiblicalWorld;
  return (
    <>
      <PageTitle
        title="قضية الخلق والعالم التوراتي"
        description="مجموعة من المقالات  المرتبطة  بالتاريخ المسجل في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه المجموعة."
        image={`/blog-images/biblical-world-cover.jpeg`}
      />

      <BibleVerseHero
        body="ها أنا آتٍ بِطوفانِ مياهٍ على الأرضِ لأزيلَ كُلَّ جسَدٍ فيهِ نَسَمَةُ حياةٍ تَحتَ السَّماءِ: كُلُّ ما في الأرضِ يَهلِكُ."
        reference="التكوين ٦: ١٧"
        translation="الترجمة العربية المشتركة"
      />

      <CreationPagesList />

      <section className="container">
        <div className="px-4 py-5 my-1 text-center">
          <h2 className=" fw-bold text-body-emphasis">العالم التوراتي</h2>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من النقد
              الموجَّه إلى الكتاب المقدس.
            </p>
            <p className="lead mb-4">
              تتضمن هذه الفئة مجموعة المقالات والدراسات المرتبطة بالتاريخ المسجل
              في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر
              التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية
              وسواها مع هذه المجموعة.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </section>
      <section className="rounded-4 border border-5 mt-3 p-3">
        <CreationCardsList creations={articlesByCategoryBiblicalWorld} />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const articlesByCategoryBiblicalWorld =
    getCreationArticlesByCategory("العالم-التوراتي");

  return {
    props: {
      articlesByCategoryBiblicalWorld: articlesByCategoryBiblicalWorld,
    },
    revalidate: 43200,
  };
}
