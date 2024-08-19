import { getAllArticlesData } from "@/utils/blog/articles-functions";
import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
export default function Home() {
  const articles = getAllArticlesData().slice(0, 4);
  return (
    <>
      <div className="flex flex-3 flex-wrap justify-center items-center content-center gap-2 md:gap-3 lg:gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div >
    </>
  );
}
