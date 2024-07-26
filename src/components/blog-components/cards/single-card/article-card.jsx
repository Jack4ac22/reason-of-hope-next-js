import ArticleCardHeader from "@/components/blog-components/cards/single-card/article-card-header";
import ArticleCardBody from "@/components/blog-components/cards/single-card/article-card-body";
import ArticleCardFooter from "@/components/blog-components/cards/single-card/article-card-footer";
export default function ArticleCard({ article }) {
  return (
    <>
      <div className="w-64 h-96 border rounded-xl relative">
        <div className="flex flex-col justify-between group">
          <ArticleCardHeader article={article} />
          <ArticleCardBody article={article} />
          {/* <ArticleCardFooter article={article} /> */}
        </div>
      </div>
    </>
  );
}