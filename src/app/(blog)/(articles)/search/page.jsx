import SearchBar from "@/components/uneversal-items/search-bar"
import { getAllCategoriesWithCount, getAllArticlesData } from "@/utils/blog/articles-functions";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import { Suspense } from "react";


export default function SearchPage() {
  const categories = getAllCategoriesWithCount()
  const articles = getAllArticlesData()

  return (
    <>
      <main className="page-main" aria-label="All Articles">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">All Articles</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              جميع المقالات
            </h1>
            <p>
              يمكنكم البحث عن مقالة معينة باستخدام كلمات مفتاحية في مربع البحث.
            </p>
          </section>
          <section id="search-bar" >
            <Suspense fallback={<CardsListSkeleton />}>

              <SearchBar categories={categories} articles={articles} />
            </Suspense>

          </section>


        </div>
      </main>

    </>

    // search componenet which will read searchParam named seach, it takes all articles and filter them based on the searchParam.
    //  if no searchParam is provided, it will show a message to enter a searchParam.
    // on typing in the search bar, it will show the articles that match the searchParam with a delay of 0.5s.
    // if no articles match the searchParam, it will show a message that no articles match the searchParam
    // if there are articles that match the searchParam, it will show the articles in a cardlist.
    // searchcomponent will be on top of the cardlist.
    // create a search bar to be added to the layout. it will have a magna glass icon that will display an input text on click then on enter or search click it will redirect to seach page with searchparams that has search key and value of input.
  );
}