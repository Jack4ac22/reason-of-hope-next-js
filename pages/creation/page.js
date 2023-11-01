import { randomArticlesFromArray } from "../../utilities/general-functions";
import {
  getAllCreationArticles,
  getCreationArticlesByCategory,
} from "../../utilities/creation-functions";

import BiblicalWorldSection from "../../components/creation-components/creation-main-page-sections/biblical-world";
import CreationAndGospelSection from "../../components/creation-components/creation-main-page-sections/creation-and-gospel";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import DinoDatingSection from "../../components/creation-components/creation-main-page-sections/dino-dating";
import EvolutionEthicsSection from "../../components/creation-components/creation-main-page-sections/evolution-ethics";
import ModernScinceSection from "../../components/creation-components/creation-main-page-sections/modern-scince";
import CreationPageMainSection from "../../components/creation-components/creation-main-page-sections/creation-page-main-section";
import PageTitle from "../../components/general-compenents/page-title";

export default function MainCreationOne(props) {
  const creationArticles = props.creationArticles;
  const articlesByCategoryGospel = props.articlesByCategoryGospel;
  const articlesByCategoryBiblicalWorld = props.articlesByCategoryBiblicalWorld;
  const articlesByCategoryDino = props.articlesByCategoryDino;
  const articlesByCategoryEvolution = props.articlesByCategoryEvolution;
  const articlesByCategoryModernScince = props.articlesByCategoryModernScince;

  return (
    <>
      <PageTitle title="قضية الخلق" />
      <figure className="m-5">
        <blockquote className="blockquote">
          <p>فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          التكوين ١: ١ <cite title="Source Title">ترجمة البستاني ڤاندايك</cite>
        </figcaption>
      </figure>

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

export async function getStaticProps(props) {
  const allArticlesByTitle = getAllCreationArticles("slug");
  const randomArticles = randomArticlesFromArray(allArticlesByTitle, 3);
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
      creationArticles: randomArticles,
      articlesByCategoryGospel: articlesByCategoryGospel,
      articlesByCategoryBiblicalWorld: articlesByCategoryBiblicalWorld,
      articlesByCategoryDino: articlesByCategoryDino,
      articlesByCategoryEvolution: articlesByCategoryEvolution,
      articlesByCategoryModernScince: articlesByCategoryModernScince,
    },
  };
}
