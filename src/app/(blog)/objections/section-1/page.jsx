import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function ObjectionsSectionOnePage() {
  const articles = getArticlesByCategory("الإختلافات-الكمية-والعددية");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}