import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import DevotionsPageMetadata from "@/assets/blog/metadata/devotions";

export const metadata = DevotionsPageMetadata;
export default function DevotionsPage() {
  const articles = getArticlesByCategory("تأملات");
  return (
    <main className="page-main" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
        <header className="page-header">
        <p id="page-heading" className="sr-only">Devotions</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1>تأملات</h1>
          <p>
            مجموعة من التأملات في بعض النصوص والمواضيع الكتابية لاستخلاص العِبر والبحث في تطبيقاتها على حياتنا اليومية.
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