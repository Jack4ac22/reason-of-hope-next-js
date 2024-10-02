import { getArticlesByCategory, getCategoriesList } from "@/utils/blog/articles-functions";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";

export async function generateStaticParams() {
  const categories = getCategoriesList();
  const static_params = categories.map((category) => ({
    category: category,
  }));
  return static_params;
}

export default function CategoryPage({ params }) {
  const category = params.category;
  const articles = getArticlesByCategory(category);
  return (
    <>
      <main className="page-main" aria-label="Categories page">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">القسم: {decodeURIComponent(category.replaceAll("-", " "))}</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              القسم: {decodeURIComponent(category.replaceAll("-", " "))}
            </h1>
          </section>
          <section className="flex-col justify-center items-center content-center">
            <Suspense fallback={<CardsListSkeleton />}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}