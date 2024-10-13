import { getAllArticlesData, getCategoriesList } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import { Suspense } from "react";
import Link from "next/link";
import SearchBar from "@/components/uneversal-items/search-bar";

export default function BiblicalWorldPage() {
  const articles = getAllArticlesData();

  return (
    <>
      <main className="page-main" aria-label="All Articles">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">All Articles</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              جميع المقالات
            </h1>
            <p>
              تجدون في هذه الصفحة جميع المقالات المتاحة في الموقع. يمكنكم البحث عن مقالة معينة أو تصفح المقالات حسب <Link href={'/categories'} className="info-link-button">الفئة</Link>.
            </p>
          </section>
          {/* <section id="search">
            <SearchBar categories={getCategoriesList()} />
          </section> */}
          <section id="list">
            <Suspense fallback={<CardsListSkeleton />}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}