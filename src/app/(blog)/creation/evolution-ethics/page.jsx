import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import EthicsEvolutionPageMetadata from "@/assets/blog/metadata/evolution-ethics";

export const metadata = EthicsEvolutionPageMetadata;

export default function EvolutionEthicsPage() {
  const articles = getArticlesByCategory("التطور-ونتائجه");
  return (
    <main className="page-main" aria-label="Modern Scince">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <p id="page-heading" className="sr-only">Modern Scince and its non-Ethical results.</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1>
          التطور ونتائجه
          </h1>
          <p>
          إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على أساس أنها من المسلّمات.
          </p>
          <p>
          سيتم في هذا القسم التعامل مع الإفتراضات التطورية، بالإضافة إلى إظهار النتائج التي ترتبط بشكل أو بآخر بتبني هذه المعتقدات.
          </p>
        </section>
        <section>
          <Suspense fallback={<CardsListSkeleton />}>
            <CardList articles={articles} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}