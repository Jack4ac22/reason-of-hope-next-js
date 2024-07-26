import { getAllArticlesData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";


export default function Page({ params }) {
  const article = getAllArticlesData().filter(article => article.slug === params.slug)[0];
  return (
    <>
    <ArticleBody article={article} />
    </>
  )
}