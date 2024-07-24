import { getAllArticlesData } from "@/utils/blog/articles-functions";
import Link from "next/link";
import ArticleCard from "@/components/blog-components/cards/single-card/article-card";
export default function Home() {
  const articles = getAllArticlesData().slice(1, 45);
  return (
    <>
      <h1>Home Page</h1>
      <div className="flex flex-3 flex-wrap justify-center items-center content-center
      p-2 m-2 gap-2 md:gap-3 lg:gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div >
    </>
  );
}
