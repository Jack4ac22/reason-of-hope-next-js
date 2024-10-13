import ArticleCardSkeleton from "@/components/blog-components/skeltons/article-card-skelton";

export default function CardsListSkeleton() {
  return (
    <div className="flex flex-wrap justify-around items-center w-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <ArticleCardSkeleton key={index} />
      ))}
    </div>
  );
}