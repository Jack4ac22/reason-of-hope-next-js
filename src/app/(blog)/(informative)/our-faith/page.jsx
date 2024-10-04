import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";
import ourFaithMetadata from "@/assets/blog/metadata/our-faith";
export const metadata = ourFaithMetadata

export default function OurFaithPage() {
  const page = getSingleArticleData('static-pages', 'our-faith', "pagesFolder")
  return (
    <main className="flex justify-center uni-text-color">
        <div className="m-8 w-full md:max-w-2xl text-center">
        <section className="w-full max-w-xl h-full mx-4" aria-labelledby="article-heading">
          <h1 id="article-heading" className="sr-only">Our Faith Page</h1>
          <ArticleBody article={page} />
        </section>
      </div>
    </main>
  )
}