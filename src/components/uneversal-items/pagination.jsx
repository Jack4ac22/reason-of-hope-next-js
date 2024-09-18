import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ListPagination({ articles, perPage, page }) {
  const pathname = usePathname()
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(value) {
    const params = new URLSearchParams(searchParams);
    if (value && !isNaN(parseInt(value)) && parseInt(value) > 0 && parseInt(value) <= Math.ceil(articles.length / perPage)) {
      params.set('page', value);
      replace(`${pathname}?${params.toString()}`);
    }
  }
  const total_pages = Math.ceil(articles.length / perPage);
  const current_page = page || searchParams.get('page') || 1;

  return (
    <div className={`flex justify-center items-cente my-3 ${total_pages === 1 && " hidden"}`}>
      {/* first item -> hidden it the current page is 1 */}
      <button className={`pagination-item`} onClick={() => handlePageChange(1)} disabled={current_page === 1}>البداية</button>
      {/* previouse item -> inactive if the current page is 1*/}
      {/* <button className={`pagination-item`} onClick={() => handlePageChange(current_page - 1)} disabled={current_page === 1}>السابق</button> */}

      {/* all the pages, mapping the total pages */}
      <div className="flex justify-center items-cente flex-wrap">
        {Array.from({ length: total_pages }, (_, i) => i + 1).map((item, index) => (
          <button key={index} className={`pagination-item ${current_page === item ? ' underline ' : ''}`} onClick={() => handlePageChange(item)} disabled={current_page === total_pages}>{item}</button>
        ))}
      </div>

      {/* next item -> inactive if the current page is the last*/}
      {/* <button className={`pagination-item`} onClick={() => handlePageChange(current_page + 1)} disabled={current_page === total_pages}>التالي</button> */}
      {/* last item -> hidden if it is the last page */}
      <button className={`pagination-item`} onClick={() => handlePageChange(total_pages)} disabled={current_page === total_pages}>النهاية</button>
    </div>
  )
}