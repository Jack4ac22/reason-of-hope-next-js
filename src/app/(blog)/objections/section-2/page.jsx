import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function ObjectionsSectionTwoPage() {
  const articles = getArticlesByCategory("أسماء-الأشخاص");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}