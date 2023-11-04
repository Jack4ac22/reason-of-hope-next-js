import { getCreationArticlesByCategory } from "../../utilities/creation-functions";
import { randomArticlesFromArray } from "../../utilities/general-functions";
import BibleVerseHero from "../../components/general-components/bible-verse-hero";
import BiblicalWorldSection from "../../components/creation-components/creation-main-page-sections/biblical-world";
import CreationAndGospelSection from "../../components/creation-components/creation-main-page-sections/creation-and-gospel";
import CreationPageMainSection from "../../components/creation-components/creation-main-page-sections/creation-page-main-section";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import DinoDatingSection from "../../components/creation-components/creation-main-page-sections/dino-dating";
import EvolutionEthicsSection from "../../components/creation-components/creation-main-page-sections/evolution-ethics";
import ModernScinceSection from "../../components/creation-components/creation-main-page-sections/modern-scince";
import PageTitle from "../../components/ui/page-title";
import ShareIt from "../../components/ui/share-it";

export default function MainCreationOne(props) {
  const articlesByCategoryGospel = props.articlesByCategoryGospel;
  const articlesByCategoryBiblicalWorld = props.articlesByCategoryBiblicalWorld;
  const articlesByCategoryDino = props.articlesByCategoryDino;
  const articlesByCategoryEvolution = props.articlesByCategoryEvolution;
  const articlesByCategoryModernScince = props.articlesByCategoryModernScince;
  // TODO: add visit CMI if possible.
  // TODO: add a link to all articles in this page.
  return (
    <>
      <PageTitle
        title="قضية الخلق"
        description="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!"
        image="/creation-pages-images/pexels-photo-5199754.jpeg"
      />

      <BibleVerseHero
        body="فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ"
        reference="التكوين ١: ١"
        translation="ترجمة البستاني ڤاندايك"
      />

      <CreationPagesList />
      <CreationPageMainSection />

      <CreationAndGospelSection
        articlesByCategoryGospel={articlesByCategoryGospel}
      />

      <BiblicalWorldSection
        articlesByCategoryBiblicalWorld={articlesByCategoryBiblicalWorld}
      />

      <DinoDatingSection articlesByCategoryDino={articlesByCategoryDino} />

      <EvolutionEthicsSection
        articlesByCategoryEvolution={articlesByCategoryEvolution}
      />

      <ModernScinceSection
        articlesByCategoryModernScince={articlesByCategoryModernScince}
      />
    </>
  );
}

export async function getStaticProps() {
  const articlesByCategoryGospel = randomArticlesFromArray(
    getCreationArticlesByCategory("الكتاب-المقدس-والإنجيل"),
    3
  );
  const articlesByCategoryBiblicalWorld = randomArticlesFromArray(
    getCreationArticlesByCategory("العالم-التوراتي"),
    3
  );
  const articlesByCategoryDino = randomArticlesFromArray(
    getCreationArticlesByCategory("الديناصورات-والتأريخ"),
    3
  );
  const articlesByCategoryEvolution = randomArticlesFromArray(
    getCreationArticlesByCategory("التطور-ونتائجه"),
    3
  );
  const articlesByCategoryModernScince = randomArticlesFromArray(
    getCreationArticlesByCategory("علوم-معاصرة"),
    3
  );
  return {
    props: {
      articlesByCategoryGospel: articlesByCategoryGospel,
      articlesByCategoryBiblicalWorld: articlesByCategoryBiblicalWorld,
      articlesByCategoryDino: articlesByCategoryDino,
      articlesByCategoryEvolution: articlesByCategoryEvolution,
      articlesByCategoryModernScince: articlesByCategoryModernScince,
    },
    revalidate: 43200,
  };
}
