import { getSingleArticleData } from "@/utils/blog/articles-functions";
import { createArticlePage } from "@/utils/blog/migration-helper";
import { getAllArticles, getPageFromSlug } from "@/utils/blog/updated-notion-helper";
import { Suspense, use } from "react";
import { getAllArticlesData } from "@/utils/blog/articles-functions";
import { mapContentMetaToArticleProps } from "@/utils/blog/notion-mapper";
export default async function Migration() {
  // const articles = await getAllArticlesData(true); // make sure this is awaited

  // for (const article of articles) {
  //   const new_page_data = await mapContentMetaToArticleProps(article);
  //   const existing_page = await getPageFromSlug(article.slug);

  //   if (!existing_page) {
  //     const new_page = await createArticlePage(process.env.NOTION_ARTICLES_DATABASE_ID, new_page_data);
  //     console.log("✅ New page created:", new_page?.properties?.Title?.title?.[0]?.plain_text);
  //   } else {
  //     console.log("⚠️ Page already exists:", existing_page?.properties?.Title?.title?.[0]?.plain_text);
  //   }
  // }

  return (
    <div dir="ltr">
      <div className="flex flex-col gap-4 mt-4">
        ✅ DONE - All articles processed with rate-limiting
      </div>
    </div>
  );
}
