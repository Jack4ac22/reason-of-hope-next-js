import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";
import ourFaithMetadata from "@/assets/blog/metadata/our-faith";


export const metadata = ourFaithMetadata

export default function OurFaithPage() {
  const page = getSingleArticleData('static-pages', 'our-faith', "pagesFolder")
  return (
    <main className="flex flex-col flex-wrap justify-center items-center content-center page-main-container" aria-label="Our Faith Page">
      <section className="page-width h-full mx-4 text-center" aria-labelledby="article-heading">
        <h1 id="article-heading" className="sr-only">Our Faith Page</h1>
        <ArticleBody article={page} />
      </section>
    </main>
  )
}