import NoImagesCardList from "@/components/blog-components/cards/cards-list/no-image-cards-list";
import { getAllCategoriesWithCount } from "@/utils/blog/articles-functions";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import { Suspense } from "react";


export default function CategoriesPage() {
  const categories = getAllCategoriesWithCount();
  return (
    <>
      <main className="page-main" aria-label="Categories page">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">Categories page</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              الأقسام
            </h1>
          </section>
          <section className="flex-col justify-center items-center content-center">
            <Suspense fallback={<CardsListSkeleton />}>
              <NoImagesCardList list={categories} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}
