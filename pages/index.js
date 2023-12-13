import { getAllArticles } from "../utilities/articles-functions";
import { randomArticlesFromArray } from "../utilities/general-functions";
import AutoplayingCarousel from "../components/general-compenents/carousels/Autoplaying-carousels.js";
import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";
import ShareIt from "../components/ui/share-it.js";
import BibleVerseHero from "../components/ui/bible-verse-hero";
import CreationSectionMainPage from "../components/main/creation-section";
import HomepageHero from "../components/main/homepage-hero";

export default function Home(props) {
  const tags = ["الإنجيل", "الكتاب المقدس", "دفاعيات", "تبشير", "يسوع المسيح"];
  return (
    <>
      <div className={styles.container}>
        {/* <HeroMain /> */}
        <HomepageHero />

        <BibleVerseHero
          body={
            "وَتَعْلَمُ أَنَّكَ مُنْذُ حَدَاثَةِ سِنِّكَ تَعْرِفُ الْكُتُبَ الْمُقَدَّسَةَ، وَهِيَ الْقَادِرَةُ أَنْ تَجْعَلَكَ حَكِيماً لِبُلُوغِ الْخَلاصِ عَنْ طَرِيقِ الإِيمَانِ فِي الْمَسِيحِ يَسُوعَ. إِنَّ الْكِتَابَ بِكُلِّ مَا فِيهِ، قَدْ أَوْحَى بِهِ اللهُ؛ وَهُوَ مُفِيدٌ لِلتَّعْلِيمِ وَالتَّوْبِيخِ وَالتَّقْوِيمِ وَتَهْذِيبِ الإِنْسَانِ فِي الْبِرِّ،"
          }
          reference={"يموثاوس الثانية ٣: ١٥-١٦"}
          translation={"ترجمة كتاب الحياة"}
        />

        <CreationSectionMainPage articles={props.creationArticles} />

        <ShareIt url="reasonofhope.org" title="سبب الرجاء" tags={tags} />

        <h3 className="mt-5">من نحن</h3>
        <p className="h5 text-justified">
          نحن مسيحيّون مؤمنون بأنَّ كُلَّ الكتاب المقدس هو كلمة الله وقادر على
          أن يجعل الإنسان حكيماً لبلوغ الخلاص عن طريق الإيمان في المسيح يسوع.
          كُلُّ الكتاب هو مُوحى به من الله وهو مصدر السلطان المعصوم عن الخطأ
          لجميع التعاليم المُلزمة على كلّ مؤمن.
        </p>
      </div>
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

  return {
    props: {
      creationArticles: creationArticles,
      wordArticles: wordArticles,
      objectionsArticles: objectionsArticles,
      logicArticles: logicArticles,
      publicationsArticles: publicationsArticles,
    },
    revalidate: 43200,
  };
}
