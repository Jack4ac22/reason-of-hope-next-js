import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionThreePageMetadata from "@/assets/blog/metadata/objections-section-3-page";

export const metadata = ObjectionsSectionThreePageMetadata();
export default function ObjectionsSectionThreePage() {
  const articles = getArticlesByCategory("توقيت-الأحداث");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}