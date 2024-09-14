import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import BooksPageMetadata from "@/assets/blog/metadata/books-main-page";

export const metadata = BooksPageMetadata();
export default function BooksPage() {
  const articles = getArticlesByCategory("كتب");
  return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header >
              <h1>
                الكتب المُترجمة
              </h1>
              <p id="page-heading" className="sr-only">الكتب المُترجمة
              </p>
              <p>
                نقدم إليكم نخبة من الكتب والكُتيّبات المترجمة من اللغة الإنجليزية، والتي تتعامل مع مواضيع مختلفة ومهمة مثل قضيّة الأصول وقضية التعامل مع سفر التكوين والكتاب المقدس.
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