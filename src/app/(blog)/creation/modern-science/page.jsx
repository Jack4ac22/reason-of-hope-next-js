import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ModernScincePageMetadata from "@/assets/blog/metadata/modern-scince";

export const metadata = ModernScincePageMetadata;
export default function ModernScincePage() {
  const articles = getArticlesByCategory("علوم-معاصرة");
  return (
    <main className="page-main" aria-label="Modern Scince">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <p id="page-heading" className="sr-only">Modern Scince compatable with creation.</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1>
            علوم معاصرة
          </h1>
          <p>
            يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان الكتاب المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة تُظهر بُطلان هذه الإدعاءات.

          </p>
          <p>
            تشتمل هذه الفئة على مجموعة المقالات والدراسات التي تتعامل مع العلوم المعاصرة،كما هو الحال بالنسبة لأبحاث الفضاء، والأبحاث الخاصة بالكائنات الحية، وعلم الوراثة والجينات.

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