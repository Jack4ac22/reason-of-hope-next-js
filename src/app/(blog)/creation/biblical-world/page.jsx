import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function BiblicalWorldPage() {
  const articles = getArticlesByCategory("العالم-التوراتي");
  return (
    <>
      <h1>Biblical World Page (WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>

    </>
  );
}