import ArticleBody from "@/components/blog-components/article-page/article-body";
import ArticleHeader from "@/components/blog-components/article-page/article-header";
import ArticleFooter from "@/components/blog-components/article-page/article-footer";
import { Suspense } from "react";
import ArticlePageSkelton from "@/components/blog-components/skeltons/article-page-skelton";

export default function ArticleContent({ article }) {
  return (
    <>
      <Suspense fallback={<ArticlePageSkelton />}>
        <ArticleHeader article={article} />
        <div className="px-2">
          {/* <ArticleBody article={article} /> */}
        </div>
        {/* <ArticleFooter article={article} /> */}
      </Suspense>
    </>
  );
}