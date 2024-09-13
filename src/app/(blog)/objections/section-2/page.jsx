import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionSectionTwoPageMetadata from "@/assets/blog/metadata/objections-section-2-page";

export const metadata = ObjectionSectionTwoPageMetadata();
export default function ObjectionsSectionTwoPage() {
  const articles = getArticlesByCategory("أسماء-الأشخاص");
  return (
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
  <header >              <h1>القسم الثاني: الإختلافات في أسماء الأشخاص والمواقع، والأنساب

              </h1>
              <p id="page-heading" className="sr-only">القسم الثاني: الإختلافات في أسماء الأشخاص والمواقع، والأنساب
              </p>
              <p>
                يتناول هذا القسم الإدعاءات القائلة بأن الكتاب المُقدَّس يخلط بين أسماء الأشخاص والمواقع، أو أنه يذكر بشكل خاطئ صلات القُرْبى بين أشخاص مُعَيَّنين.
              </p>
              <p>
                إن الكتاب المقدس يحتوي على التاريخ الحقيقي لذلك فهو يذكر في كثير من المواضع أسماء المواقع التي وقعت فيها الأحداث المهمّة، وكذلك أسماء الشخصيات التي لعبت أدواراً فيها. كما ويذكر في مواضع كثيرة أُخرى، سلاسل تفصيلية للأنساب، فهل يناقض نفسه في هذا الخصوص؟
              </p>
              <p>
                هذا هو ما سوف تتم الإجابة عليه في هذا القسم.
              </p>
              <section aria-description="Articles Card of the Subject">
                <Suspense fallback={<CardsListSkeleton />}>
                  <CardList articles={articles} />
                </Suspense>
              </section>
            </header>
          </section>
        </div>
      </main>
  );
}