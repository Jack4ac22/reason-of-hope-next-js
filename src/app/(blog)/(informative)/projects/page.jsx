import SoonPageMetadata from "@/assets/blog/metadata/soon-page";
import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";

export const metadata = SoonPageMetadata;

export default function ProjectsPage() {
  const page = getSingleArticleData('static-pages', 'projects', "pagesFolder")
  return (
    <main className="flex justify-center uni-text-color">
      <div className="m-8 w-full md:max-w-2xl">
        <section className="w-full max-w-xl h-full mx-4" aria-labelledby="article-heading">
          <h1 id="article-heading" className="sr-only">Our Projects</h1>
          <ArticleBody article={page} />
        </section>
      </div>
    </main>
  )
}