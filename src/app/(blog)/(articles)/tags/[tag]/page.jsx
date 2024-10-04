import { getArticlesByTag, getTagsList } from "@/utils/blog/articles-functions"
import CardList from "@/components/blog-components/cards/cards-list/cards-list"
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton"
import { Suspense } from "react"
import CatTagMetadata from "@/assets/blog/metadata/category-tag-page"

export async function generateStaticParams() {
  const tags = getTagsList()
  const static_params = tags.map((tag) => ({
    tag: tag
  }))
  return static_params
}

export async function generateMetadata({ params, searchParams }, parent) {
  const tag = params.tag
  const metadata = CatTagMetadata("tag", tag)
  return metadata
}

export default function TagPage({ params }) {
  const tag = params.tag
  const articles = getArticlesByTag(tag)
  if (articles.length === 0) notFound();
  return (
    <>
      <main className="page-main" aria-label="Tags page">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">وسم {decodeURIComponent(tag.replaceAll("-", " "))}</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              الوسم: {decodeURIComponent(tag.replaceAll("-", " "))}
            </h1>
          </section>
          <section className="flex-col justify-center items-center content-center">
            <Suspense fallback={<CardsListSkeleton />}>
              <CardList articles={articles} link_prefix="/tags/" />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  )
}