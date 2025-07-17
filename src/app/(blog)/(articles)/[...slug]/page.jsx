// src/app/(blog)/(articles)/[...slug]/page.jsx

import { getAllArticlesData, getArticleFromParams } from "@/utils/blog/articles-functions";
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

  try {
    const slug = params?.slug
    const article = getAllArticlesData().filter(article => (article.slug === slug[1]) && (article.directory === slug[0]))[0]
    const metadata = articleMetadata(article)
    return metadata
  } catch (error) {

  }
}

export default function Page({ params }) {
  let article = getAllArticlesData().filter(article => (article.slug === params?.slug[1]) && (article.directory === params?.slug[0]))
  if (article?.length === 0) {
    article = [getArticleFromParams(params)];
  }
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