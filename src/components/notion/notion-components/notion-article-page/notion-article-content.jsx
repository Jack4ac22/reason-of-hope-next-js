import NotionArticleBody from "@/components/notion/notion-components/notion-article-page/notion-article-body";
import NotionArticleHeader from "@/components/notion/notion-components/notion-article-page/notoin-article-header";
import NotionArticleFooter from "@/components/notion/notion-components/notion-article-page/notion-article-footer";
import { Suspense } from "react";
import ArticlePageSkelton from "@/components/blog-components/skeltons/article-page-skelton";

export default async function NotionArticleContent({ article }) {
  return (
    <>
      <Suspense fallback={<ArticlePageSkelton />}>
        <NotionArticleHeader article={article} />
        <section className="px-2">
          <NotionArticleBody article={article} />
        </section>
        <NotionArticleFooter article={article} />
      </Suspense>
    </>
  );
}