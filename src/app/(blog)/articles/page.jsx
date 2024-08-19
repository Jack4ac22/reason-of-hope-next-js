import { getAllArticlesData } from "@/utils/blog/articles-functions";
import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
export default function Page() {
  const articles = getAllArticlesData();
  const article = articles[15];
  const article2 = articles[45];
  const book = articles[360];
  const book2 = articles[382];
  return (
    <>
      <div className="flex justify-center">
        <div className="columns-1 sm:columns-2 lg:columns-4">
          <ArticleCard article={article} />
          <ArticleCard article={book} />
          <ArticleCard article={article2} />
          <ArticleCard article={book2} />
        </div>
      </div>
    </>
  );
}