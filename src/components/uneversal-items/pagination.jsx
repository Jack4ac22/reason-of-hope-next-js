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


  function showPagePagination(current_page, page_number) {
    page_number = parseInt(page_number);
    if (current_page <= 3) { return page_number <= 3; }
    else if (current_page >= total_pages - 2) { return page_number >= total_pages - 2; }
    else {
      return page_number === current_page || page_number === current_page - 1 || page_number === current_page + 1;
    }
  }
  console.log(current_page, total_pages)
  return (
    <>
      <div className={`flex justify-center items-cente my-3 ${total_pages === 1 && " hidden"}`}>

        {/* first item -> hidden it the current page is 1 */}
        {/* <button className={`pagination-item`} onClick={() => handlePageChange(1)} disabled={current_page === 1}>البداية</button> */}

        {/* previouse item -> inactive if the current page is 1*/}
        {current_page === 1 || (<button className={`pagination-item`} onClick={() => handlePageChange(current_page - 1)} disabled={current_page === 1}>السابق</button>)}

        {/* all the pages, mapping the total pages */}
        <div className="flex justify-center items-cente flex-wrap">
          {Array.from({ length: total_pages }, (_, i) => i + 1).map((item, index) => (
            showPagePagination(current_page, item) &&
            (<button key={index} className={`pagination-item ${current_page === item ? ' underline ' : ''} $`} onClick={() => handlePageChange(item)} disabled={current_page === item}>{item.toLocaleString('ar-SY')}</button>)
          ))}
        </div>

        {/* next item -> inactive if the current page is the last*/}
        {current_page === total_pages || (<button className={`pagination-item`} onClick={() => handlePageChange(current_page + 1)} disabled={current_page === total_pages}>التالي</button>)}

        {/* last item -> hidden if it is the last page */}
        {/* <button className={`pagination-item`} onClick={() => handlePageChange(total_pages)} disabled={current_page === total_pages}>النهاية</button> */}

      </div >
      <div className="flex-col justify-center space-y-4 my-4 " >
        <p>إجمالي عدد الصفحات: {total_pages?.toLocaleString('ar-SY')}</p>
        <p>إجمالي عدد المنشورات: {articles?.length.toLocaleString('ar-SY')}</p>
      </div>
    </>
  )
}