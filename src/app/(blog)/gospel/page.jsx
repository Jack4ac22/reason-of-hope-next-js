import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleContent from "@/components/blog-components/article-page/article-content";
import gospelMetadata from "@/assets/blog/metadata/gospel";


export const metadata = gospelMetadata 

export default function GospelPage() {
  const page = getSingleArticleData('static-pages', 'gospel', "pagesFolder")
  return (
    <main className="page-main" aria-label="Our Faith Page">
      <section className="max-w-2xl h-full mx-4" aria-labelledby="article-heading">
        <h1 id="article-heading" className="sr-only">The Gospel Page</h1>
        <ArticleContent article={page} />
      </section>
    </main>
  )
}