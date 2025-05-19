import { mapAllFallacies } from "@/utils/blog/notion-mapper";
import NotionFallaciesList from "@/components/notion/notion-components/notion-article-page/article-footer-components/notion-fallacies-list";
import NotionRelatedArticles from "@/components/notion/notion-components/notion-article-page/article-footer-components/notion-related-articles";
import FallaciesListSkelton from "@/components/blog-components/skeltons/fallacies-list-skelton";
import RelatedArticlesSkeleton from "@/components/blog-components/skeltons/related-articles-skelton";
import { Suspense } from "react";
export default async function NotionArticleFooter({ article }) {
  let allFallacies = [];
  if (article.directory === "static-pages") return null
  if (article.fallacies.length > 0) {
     allFallacies = await mapAllFallacies();
  }
  return (
    <>
      {article.fallacies.length > 0 &&
        <Suspense fallback={<FallaciesListSkelton />}>
          <NotionFallaciesList article={article} allFallacies={allFallacies} />
        </Suspense>
      }
      <Suspense fallback={<RelatedArticlesSkeleton />}>
        <NotionRelatedArticles article={article} />
      </Suspense>
    </>
  );
}