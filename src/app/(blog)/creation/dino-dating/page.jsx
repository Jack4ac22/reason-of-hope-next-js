import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function DinoDatingPage() {
  const articles = getArticlesByCategory("الديناصورات-والتأريخ");
  return (
    <>
      <h1>Dino Dating Page (WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}