import PageTitle from "../../components/general-compenents/page-title";
import { getCreationArticlesByCategory } from "../../utilities/creation-functions";

import BibleVerseHero from "../../components/general-components/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import CreationCardsList from "../../components/creation-components/creation-cards-list";

export default function ModernScince(props) {
  const articlesByCategoryModernScince = props.articlesByCategoryModernScince;
  return (
    <>
      <PageTitle
        title="قضية الخلق والعلوم المعاصرة"
        description="يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان الكتاب المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة تُظهر بُطلان هذه الإدعاءات."
        image={`/blog-images/modern-scince-page-cover.jpeg`}
      />

      <BibleVerseHero
        body="لَا تُجِبِ الْجَاهِلَ بِمِثْلِ حُمْقِهِ لِئَلّا تُصْبِحَ مِثْلَهُ. رُدَّ عَلَى الْجَاهِلِ حَسَبَ جَهْلِهِ لِئَلّا يَضْحَى حَكِيماً فِي عَيْنَيْ نَفْسِهِ."
        reference="سفر الأمثال ٢٦: ٤-٥"
        translation="ترجمة كتاب الحياة"
      />

      <CreationPagesList />

      <section className="container">
        <div className="px-4 py-5 my-1 text-center">
          <h2 className=" fw-bold text-body-emphasis">علوم معاصرة</h2>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان الكتاب
              المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة تُظهر بُطلان
              هذه الإدعاءات.
            </p>
            <p className="lead mb-4">
              تشتمل هذه الفئة على مجموعة المقالات والدراسات التي تتعامل مع
              العلوم المعاصرة،كما هو الحال بالنسبة لأبحاث الفضاء، والأبحاث
              الخاصة بالكائنات الحية، وعلم الوراثة والجينات.
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </section>
      <section className="rounded-4 border border-5 mt-3 p-3">
        <CreationCardsList creations={articlesByCategoryModernScince} />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const articlesByCategoryModernScince =
    getCreationArticlesByCategory("علوم-معاصرة");

  return {
    props: {
      articlesByCategoryModernScince: articlesByCategoryModernScince,
    },
    revalidate: 43200,
  };
}
