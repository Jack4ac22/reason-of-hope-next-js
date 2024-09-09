import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
export default function PublicationsMainPage() {
  const articles = getArticlesByCategory("إصدارات");
  return (
    <>
      <div>Publication main page (WIP)</div>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}