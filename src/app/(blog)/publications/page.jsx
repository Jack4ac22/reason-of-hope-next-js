import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function PublicationsMainPage() {
  const articles = getArticlesByCategory("إصدارات");
  return (
    <>
      <div>Publication main page (WIP)</div>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}