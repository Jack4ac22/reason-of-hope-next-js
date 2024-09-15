import { getAllArticlesData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";
import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
  const articles = getAllArticlesData();
  const static_params = articles.map((article) => ({
    slug: [article.directory, article.slug],
  }))
  return static_params
}

export default function Page({ params }) {
  const article = getAllArticlesData().filter(article => (article.slug === params?.slug[1]) && (article.directory === params?.slug[0]))
  if (article.length === 0) notFound()
    return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <ArticleBody article={article[0]} />
        </div>
      </main>
    </>
  )
}