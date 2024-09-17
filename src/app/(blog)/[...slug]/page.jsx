import { getAllArticlesData } from "@/utils/blog/articles-functions";
import { notFound} from "next/navigation";
import ArticleContent from "@/components/blog-components/article-page/article-content";
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
      <main className="flex justify-center mx-auto uni-text-color">
        <div className="m-8 md:max-w-2xl ">
          <ArticleContent article={article[0]} />
        </div>
      </main >
    </>
  )
}