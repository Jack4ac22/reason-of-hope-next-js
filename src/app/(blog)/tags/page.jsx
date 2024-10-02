import { getAllTagsWithCount } from "@/utils/blog/articles-functions";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import { Suspense } from "react";
import CardSliderCardList from "@/components/blog-components/cards/cards-list/card-slider-cards-list";

export default function TagsPage() {
  const tags = getAllTagsWithCount();
  return (
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
            <CardSliderCardList list={tags} linkPrefix='/tags/' />
          </Suspense>
        </section>
      </div>
    </main>);
}