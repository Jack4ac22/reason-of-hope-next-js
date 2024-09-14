import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import BiblicalStudiesPageMetadata from "@/assets/blog/metadata/biblical-studies";

export const metadata = BiblicalStudiesPageMetadata();
export default function studiesPage() {
  const articles = getArticlesByCategory("دراسات-عامّة");
  return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header >
              <h1>
                دراسات كتابية
              </h1>
              <p id="page-heading" className="sr-only">دراسات كتابية
              </p>
              <p>
                نقدم إليكم مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على مؤلفات لنخبة من اللاهوتيين المُحافظين.

              </p>
            </header>
          </section>
          <section aria-description="Articles Card of the Subject">
            <Suspense fallback={<CardsListSkeleton />}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}