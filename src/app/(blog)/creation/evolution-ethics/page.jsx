import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";

export default function EvolutionEthicsPage() {
  const articles = getArticlesByCategory("التطور-ونتائجه");
  return (
    <>
      <h1>Evolution Ethics Page (WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}