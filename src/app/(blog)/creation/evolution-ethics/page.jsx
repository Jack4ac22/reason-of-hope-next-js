import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function EvolutionEthicsPage() {
  const articles = getArticlesByCategory("التطور-ونتائجه");
  return (
    <>
      <h1>Evolution Ethics Page (WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}