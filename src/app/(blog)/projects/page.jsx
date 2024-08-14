import RegularArticleCard from "@/components/blog-components/cards/article-card/article-card";
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
        <RegularArticleCard article={article} />
        <RegularArticleCard article={article1} />
        <RegularArticleCard article={article2} />
        <RegularArticleCard article={article3} />
        <RegularArticleCard article={article4} />
        <RegularArticleCard article={article5} />
      </div>

    </>
  );
}