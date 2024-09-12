import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionSectionTwoPageMetadata from "@/assets/blog/metadata/objections-section-2-page";

export const metadata = ObjectionSectionTwoPageMetadata();
export default function ObjectionsSectionTwoPage() {
  const articles = getArticlesByCategory("أسماء-الأشخاص");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}