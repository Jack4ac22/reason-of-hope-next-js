import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function LogicPage() {
  const articles = getArticlesByCategory("دراسات-كتابية");

  return (
    <>
      <h1>logic page (WIP)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}