import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import LogicPageMetadata from "@/assets/blog/metadata/logic";

export const metadata = LogicPageMetadata;

export default function LogicPage() {
  const articles = getArticlesByCategory("المنطق");

  return (
    <>
      <main className="page-main" aria-label="Logic Studies">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">Logic Study</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>علم المنطق والأخطاء المنطقية</h1>
            <p>
              مجموعة من الدراسات في علم المنطق بالإضافة إلى تقديم أشهر المعالطات والأخطاء المنطقية مع أمثلة تطبيقية عن استخدامها في سياق الجدلات التي يتم تقديمها ضد الكتاب المقدس والسرد التوراتي عن الخلق.
            </p>
          </section>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}