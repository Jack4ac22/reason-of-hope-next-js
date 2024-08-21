import { getSingleArticleData } from "@/utils/blog/articles-functions";
import ArticleBody from "@/components/blog-components/article-page/article-body";
import ourFaithMetadata from "@/assets/blog/metadata/our-faith";


export const metadata = ourFaithMetadata

export default function OurFaithPage({ params }) {
  const page = getSingleArticleData('static-pages', 'our-faith',"pagesFolder")
  console.log(params)
  return (
    <>
      <ArticleBody article={page} />
    </>
  )
}