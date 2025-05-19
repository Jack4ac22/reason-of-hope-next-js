import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";

export default function RelatedArticlesSkeleton() {
  return (
    <div className="flex justify-center print:hidden">
      <div className="flex-col">
        <h3 className="article-footer-headings">
          المقالات ذات الصلة
        </h3>
        <CardsListSkeleton />
      </div>
    </div>  );
}