import {
  getAllArticles,
  getAllBlogArticles,
} from "../utilities/articles-functions";
import { randomArticlesFromArray } from "../utilities/general-functions";
import HeroMain from "../components/main/hero-main.js";
import ShareIt from "../components/ui/share-it.js";
import BibleVerseHero from "../components/ui/bible-verse-hero";
import CreationSectionMainPage from "../components/main/creation-section";
import PublicationSectionMainPage from "../components/main/publicationsSection.js";
import TheGospelSectionMainPage from "../components/main/gospel-section.js";
import ObjectionsSectionMainPage from "../components/main/objectionssSection.js";
import HomepageHero from "../components/main/homepage-hero";
import ArticleCardsList from "../components/general-compenents/cards-list/acrticles-cards-list";

export default function Home(props) {
  const tags = ["الإنجيل", "الكتاب المقدس", "دفاعيات", "تبشير", "يسوع المسيح"];
  return (
    <>
      <div className="container">
        <BibleVerseHero
          body={
            "وَتَعْلَمُ أَنَّكَ مُنْذُ حَدَاثَةِ سِنِّكَ تَعْرِفُ الْكُتُبَ الْمُقَدَّسَةَ، وَهِيَ الْقَادِرَةُ أَنْ تَجْعَلَكَ حَكِيماً لِبُلُوغِ الْخَلاصِ عَنْ طَرِيقِ الإِيمَانِ فِي الْمَسِيحِ يَسُوعَ. إِنَّ الْكِتَابَ بِكُلِّ مَا فِيهِ، قَدْ أَوْحَى بِهِ اللهُ؛ وَهُوَ مُفِيدٌ لِلتَّعْلِيمِ وَالتَّوْبِيخِ وَالتَّقْوِيمِ وَتَهْذِيبِ الإِنْسَانِ فِي الْبِرِّ،"
          }
          reference={"يموثاوس الثانية ٣: ١٥-١٦"}
          translation={"ترجمة كتاب الحياة"}
        />

        <ShareIt url="reasonofhope.org" title="سبب الرجاء" tags={tags} />

        <HomepageHero />
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              المواضيع الرئيسية
            </h2>
          </div>
        </div>
        <TheGospelSectionMainPage />
        <CreationSectionMainPage articles={props.creationArticles} />
        <PublicationSectionMainPage articles={props.publicationsArticles} />
        <ObjectionsSectionMainPage articles={props.objectionsArticles} />
      </div>
      <section className="rounded-4 border border-5 mt-3">
        <div>
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <ArticleCardsList
              articles={props.allArticles}
              numberToShow={5}
              baseUrl=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const creationArticles = randomArticlesFromArray(
    getAllArticles("/content/creation"),
    3
  );
  const wordArticles = randomArticlesFromArray(
    getAllArticles("/content/word"),
    3
  );
  const objectionsArticles = randomArticlesFromArray(
    getAllArticles("/content/objections"),
    3
  );
  const logicArticles = randomArticlesFromArray(
    getAllArticles("/content/logic"),
    3
  );
  const publicationsArticles = randomArticlesFromArray(
    getAllArticles("/content/publications"),
    3
  );

  const random25 = randomArticlesFromArray(getAllBlogArticles(), 25);

  return {
    props: {
      creationArticles: creationArticles,
      wordArticles: wordArticles,
      objectionsArticles: objectionsArticles,
      logicArticles: logicArticles,
      publicationsArticles: publicationsArticles,
      allArticles: random25,
    },
    revalidate: 43200,
  };
}
