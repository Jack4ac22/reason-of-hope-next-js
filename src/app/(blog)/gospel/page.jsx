import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";
import ourFaithMetadata from "@/assets/blog/metadata/our-faith";


export const metadata = ourFaithMetadata

export default function GospelPage() {
  const page = getSingleArticleData('static-pages', 'gospel', "pagesFolder")
  return (
    <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="Our Faith Page">
      <section className="max-w-2xl h-full mx-4" aria-labelledby="article-heading">
        <h1 id="article-heading" className="sr-only">The Gospel Page</h1>
        <ArticleBody article={page} />
      </section>
    </main>
  )
}