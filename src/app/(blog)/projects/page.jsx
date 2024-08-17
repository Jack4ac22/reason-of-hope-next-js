import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
import { getSingleArticleData } from "@/utils/blog/articles-functions";

export default function Page() {
  const article = getSingleArticleData('creation', '5miracles')
  const article1 = getSingleArticleData('objections', 'objection112')
  const article2 = getSingleArticleData('objections', 'objection008')
  const article3 = getSingleArticleData('objections', 'objection224')
  const article4 = getSingleArticleData('word', 'abomination')
  const article5 = getSingleArticleData('creation', 'testing-article')
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around items-center pt-10 bg-lightShade-500 dark:bg-lightShade-700">
        <ArticleCard article={article} />
        <ArticleCard article={article1} />
        <ArticleCard article={article2} />
        <ArticleCard article={article3} />
        <ArticleCard article={article4} />
        <ArticleCard article={article5} />
      </div>

    </>
  );
}