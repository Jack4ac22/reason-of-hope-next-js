import { Suspense } from "react";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import CardSlider from "@/components/blog-components/ui/sliders/cards-slider";
import { getRelatedPages } from "@/utils/blog/updated-notion-helper";
import { getPagePropertiesInFlatObject } from "@/utils/blog/notion-mapper";

export default async function NotionRelatedArticles({ article }) {
  const relatedArticlesData = await getRelatedPages(article.mainCategory, 5);
  if (relatedArticlesData.length === 0) return null
  let mappedRelatedArticles = [];
  for (article in relatedArticlesData) {
    mappedRelatedArticles.push(await getPagePropertiesInFlatObject(relatedArticlesData[article].properties));
  }
  return (
    <section className="block mt-4">
      <div className="flex justify-center print:hidden">
        <div className="flex-col">
          <h3 className="article-footer-headings">
            المقالات ذات الصلة
          </h3>
          <Suspense fallback={<CardsListSkeleton />} >
            <CardSlider articles={mappedRelatedArticles} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}