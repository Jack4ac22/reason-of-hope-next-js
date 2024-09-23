import ArticleBody from "@/components/blog-components/article-page/article-body";
import ArticleHeader from "@/components/blog-components/article-page/article-header";
import ArticleFooter from "@/components/blog-components/article-page/article-footer";

export default function ArticleContent({ article }) {
  return (
    <>
      <ArticleHeader article={article} />
      <div className="px-2">
        <ArticleBody article={article} />
      </div>
      <ArticleFooter article={article} />
    </>
  );
}