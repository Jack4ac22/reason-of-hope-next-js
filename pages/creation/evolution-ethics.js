import { getCreationArticlesByCategory } from "../../utilities/creation-functions";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import BibleVerseHero from "../../components/ui/bible-verse-hero";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import PageTitle from "../../components/ui/page-title";

export default function EvolutionAndEthics(props) {
  const articlesByCategoryEvolution = props.articlesByCategoryEvolution;
  return (
    <>
      <>
        <PageTitle
          title="قضية الخلق والتطور ونتائجه"
          description="إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على أساس أنها من المسلّمات."
          image={`/blog-images/modern-scince-page-cover.jpeg`}
        />

        <BibleVerseHero
          body="فَأَجَابَ وَقَالَ لَهُمْ: «أَمَا قَرَأْتُمْ أَنَّ ٱلَّذِي خَلَقَ مِنَ ٱلْبَدْءِ خَلَقَهُمَا ذَكَرًا وَأُنْثَى؟"
          reference="متى ١٩: ٤"
          translation="ترجمة البستاني ڤاندايك"
        />
      </>
      <>
        <CreationPagesList />

        <section className="container">
          <div className="px-4 py-5 my-1 text-center">
            <h2 className=" fw-bold text-body-emphasis">التطور ونتائجه</h2>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على
                أساس أنها من المسلّمات.
              </p>
              <p className="lead mb-4">
                سيتم في هذا القسم التعامل مع الإفتراضات التطورية، بالإضافة إلى
                إظهار النتائج التي ترتبط بشكل أو بآخر بتبني هذه المعتقدات.
              </p>

              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
            </div>
          </div>
        </section>
        <section className="rounded-4 border border-5 mt-3 p-3 mb-2">
          <ArticleCardsList
            articles={articlesByCategoryEvolution}
            baseUrl="/creation"
          />
        </section>
      </>
    </>
  );
}
export async function getStaticProps() {
  const articlesByCategoryEvolution =
    getCreationArticlesByCategory("التطور-ونتائجه");

  return {
    props: {
      articlesByCategoryEvolution: articlesByCategoryEvolution,
    },
    revalidate: 43200,
  };
}
