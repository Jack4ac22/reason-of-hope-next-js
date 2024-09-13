import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionSectoinFivemePageMetadata from "@/assets/blog/metadata/objections-section-5-page";

export const metadata = ObjectionSectoinFivemePageMetadata();

export default function ObjectionsSectionFivePage() {
  const articles = getArticlesByCategory("إختلافات-التفاصيل");
  return (
    <>
      <h1>(WIP)</h1>
      <Suspense fallback={<CardsListSkeleton />}>
        <CardList articles={articles} />
      </Suspense>
    </>
  );
}