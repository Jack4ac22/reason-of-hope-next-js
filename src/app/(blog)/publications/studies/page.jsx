import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function studiesPage() {
  const articles = getArticlesByCategory("دراسات-عامّة");
  return (
    <>
      <h1>studies page (WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}