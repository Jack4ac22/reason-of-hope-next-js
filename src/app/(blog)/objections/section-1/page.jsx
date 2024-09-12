import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionOnePagePageMetadata from "@/assets/blog/metadata/objections-section-1-page";

export const metadata = ObjectionsSectionOnePagePageMetadata();

export default function ObjectionsSectionOnePage() {
  const articles = getArticlesByCategory("الإختلافات-الكمية-والعددية");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}