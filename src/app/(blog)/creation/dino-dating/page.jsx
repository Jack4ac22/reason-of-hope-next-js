import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import DinoDatingPageMetadata from "@/assets/blog/metadata/dino-dating";

export const metadata = DinoDatingPageMetadata;

export default function DinoDatingPage() {
  const articles = getArticlesByCategory("الديناصورات-والتأريخ");
  return (
    <main className="page-main" aria-label="The Dinosaurs and Dating methods">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <p id="page-heading" className="sr-only">The Dinosaurs and Dating method</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1>
            الديناصورات والتأريخ
          </h1>
          <p>
            يتم استخدام الديناصورات كأداة لنقد التاريخ التوراتي، وذلك بعد أن يتم تأريخها إلى عدة ملايين من السنوات.
          </p>
          <p>
            تشتمل هذه الفئة على الدراسات المختصة بالديناصورات وتوافقها مع الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ المستخدمة في النظام العلماني.
          </p>
          <p>
            سيضاف إليها جميع الدراسات المختصة بالمستحاثات.
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