import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionFourPageMetadata from "@/assets/blog/metadata/objections-section-4-page";

export const metadata = ObjectionsSectionFourPageMetadata();
export default function ObjectionsSectionFourPage() {
  const articles = getArticlesByCategory("العلاقة-السببية");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}