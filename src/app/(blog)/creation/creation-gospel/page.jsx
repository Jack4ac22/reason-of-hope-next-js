import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function CreationGospelPage() {
  const articles = getArticlesByCategory("الكتاب-المقدس-والإنجيل");
  return (
    <>
      <h1>Creation Gospel Page (WIP) </h1>
<Suspense fallback={<div>Loading...</div>}>
            <CardList articles={articles} />
          </Suspense>

    </>
  );
}