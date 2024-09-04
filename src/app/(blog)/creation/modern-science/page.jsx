import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
export default function ModernScincePage() {
  const articles = getArticlesByCategory("علوم-معاصرة");
  return (
    <>
      <h1>Modern SCince Page (WIP)</h1>
<Suspense fallback={<div>Loading...</div>}>
            <CardList articles={articles} />
          </Suspense>
    </>
  );
}