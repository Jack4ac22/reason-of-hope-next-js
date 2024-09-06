'use client';
import { Suspense } from 'react'
import { useSearchParams } from "next/navigation";
import ArticleCard from "../article-card/article-card";
export default function CardList({ articles }) {
  const order_options = ["latest", "oldest", "title"];
  const per_page_options = ["4", "6", "8", "10", 'all'];
  function handlePageChange(page) {
    const url = new URL(window.location.href);
    url.searchParams.set("p", page);
    window.location.href = url.toString();
  }
  function handleOrderChange(order) {
    const url = new URL(window.location.href);
    url.searchParams.set("order", order);
    window.location.href = url.toString();
  }
  function handlePerPageChange(articles_per_page) {
    const url = new URL(window.location.href);
    url.searchParams.set("pp", articles_per_page);
    window.location.href = url.toString();
  }

  let page = useSearchParams().get("p") || 1;
  let articles_per_page = useSearchParams().get("pp") || 4;
  if (!per_page_options.includes(articles_per_page)) articles_per_page = 6
  if (articles_per_page === "all") articles_per_page = articles.length
  const total_pages = Math.ceil(articles.length / articles_per_page);
  let order = useSearchParams().get("order");
  if (!order_options.includes(order)) order = "latest";
  if ((page < 1) || (page > total_pages)) page = 1;
  const start = (page - 1) * articles_per_page;
  const end = start + articles_per_page;
  const current_articles = articles.slice(start, end);

  return (
    <section className="mt-6 uni-text-color">
      <p className="sr-only">Articles</p>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mx-4 border-4 rounded-xl">
          {/* order articles */}
          <div className="flex justify-center items-center">
            <label htmlFor="order" className="mx-2">ترتيب حسب:</label>
            <select className="card-list-select uni-background uni-text-color" id="order" name="order" value={order} onChange={(e) => handleOrderChange(e.target.value)}>
              <option value="latest" defaultValue={order === "latest"}>الأحدث</option>
              <option value="oldest" defaultValue={order === "oldest"}>الأقدم</option>
              <option value="title" defaultValue={order === "title"}>العنوان</option>
            </select>
          </div>
          {/* number of articles per page */}
          <div className="flex justify-center items-center">
            <label htmlFor="per-page" className="mx-2">عدد المقالات في الصفحة:</label>
            <select className="card-list-select" id="per-page" name="per-page" value={articles_per_page} onChange={(e) => handlePerPageChange(e.target.value)} >
              {per_page_options.map((option, index) => (
                <option key={index} value={option} defaultValue={articles_per_page === option}>{option}</option>
              ))}
            </select>
          </div>
          {/* articles cards */}
          <div className="flex flex-wrap justify-around items-center w-full">
            {current_articles.map((article, index) => (
              <ArticleCard key={`${index}_${article.slug}`} article={article} />
            ))}
          </div>
          {/* pagination */}
          {total_pages !== 1 && (<div className="flex justify-center items-center">
            <ul className="flex justify-center items-center">
              <li className="mx-2">
                <button onClick={() => handlePageChange(page - 1)} className="text-blue-500 hover:underline disabled:hidden" aria-label="Previous Page" disabled={page == 1}>السابق</button>
              </li>
              {Array.from({ length: total_pages }, (_, i) => (
                <li key={i} className="mx-2">
                  <button onClick={() => handlePageChange(i + 1)} className={`text-blue-500 hover:underline ${page == i + 1 && ' text-mainBrand-500'}`} aria-label={`Page ${i + 1}`}>{i + 1}</button>
                </li>
              ))}
              <li className="mx-2">
                <button onClick={() => handlePageChange(page + 1)} className="text-blue-500 hover:underline disabled:hidden" aria-label="Next Page" disabled={page == total_pages}>التالي</button>
              </li>
            </ul>
          </div>)}
        </div>
      </Suspense>
    </section>
  );
}