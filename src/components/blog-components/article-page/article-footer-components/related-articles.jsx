import { Suspense } from "react";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import CardSlider from "@/components/blog-components/ui/sliders/cards-slider";
import { getRelatedArticles } from "@/utils/blog/articles-functions";
export default function RelatedArticles(article) {
  const relatedArticlesData = getRelatedArticles(article, 5);
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <h3 className="text-2xl text-center font-bold mt-4">
          المقالات ذات الصلة
        </h3>
        <Suspense fallback={<CardsListSkeleton />} >
          <CardSlider articles={relatedArticlesData} />
        </Suspense>
      </div>
    </div>
  );
}