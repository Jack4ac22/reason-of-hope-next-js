import { notFound } from "next/navigation";
import articleMetadata from "@/assets/blog/metadata/single_article";
import { getPageFromSlug } from "@/utils/blog/updated-notion-helper"
import { getPagePropertiesInFlatObject } from "@/utils/blog/notion-mapper"
import NotionArticleContent from "@/components/notion/notion-components/notion-article-page/notion-article-content";


// export async function generateMetadata({ params, searchParams }, parent) {

//   try {

//     const slug = params.slug
//     // get article data
//     const article = getAllArticlesData().filter(article => (article.slug === slug[1]) && (article.directory === slug[0]))[0]
//     const metadata = articleMetadata(article)
//     return metadata

//   } catch (error) {

//   }
// }

export default async function Page({ params }) {
  let pageSlug;
  let pageMainCat;

  if (params?.slug?.length === 1) pageSlug = params?.slug[0];
  if (params?.slug?.length === 2) {
    pageSlug = params?.slug[1];
    pageMainCat = params?.slug[0]
  }

  const article = await getPageFromSlug(pageSlug);
  
  const articleProperties = await getPagePropertiesInFlatObject(article?.properties)  
  const properties_with_id = { ...articleProperties, "id": article?.id };
  if (!article) notFound();
  return (
    <>
      <main className="flex justify-center uni-text-color">
        <div className="m-8 w-full md:max-w-2xl ">
          <NotionArticleContent article={properties_with_id} />
        </div>
      </main >
    </>
  )
}