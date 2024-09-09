import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
export default function ObjectionsMainPage() {
  const articles = getArticlesByCategory("تناقضات");
  return (
    <>
      <h1>Obejctions Main Page (WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}