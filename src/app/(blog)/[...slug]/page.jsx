import { getAllArticlesData } from "@/utils/blog/articles-functions";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/blog-components/article-page/article-content";
import articleMetadata from "@/assets/blog/metadata/single_article";
export async function generateStaticParams() {
  const articles = getAllArticlesData();
  const static_params = articles.map((article) => ({
    slug: [article.directory, article.slug],
  }))
  return static_params
}


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug
  // get article data
  const article = getAllArticlesData().filter(article => (article.slug === slug[1]) && (article.directory === slug[0]))[0]
  if (!article) return {
    title: "404 Not Found",
    description: "The page you are looking for does not exist",
  }
  // generate metadata
  const metadata = articleMetadata(article)
  return metadata
}


export default function Page({ params }) {
  const article = getAllArticlesData().filter(article => (article.slug === params?.slug[1]) && (article.directory === params?.slug[0]))
  if (article.length === 0) notFound()
  return (
    <>
      <main className="flex justify-center uni-text-color">
        <div className="m-8 w-full md:max-w-2xl ">
          <ArticleContent article={article[0]} />
        </div>
      </main >
    </>
  )
}