'use client';
import { useSearchParams } from "next/navigation";
import SliderWithTitleCards from "@/components/blog-components/cards/cards-list/list-components/slider-with-title-cards";
import DropDownOption from "@/components/uneversal-items/dropdown-option";
import ListPagination from "@/components/uneversal-items/pagination";

export default function CardSliderCardList({ list, linkPrefix }) {
  const orderOptions = ["latest", "oldest", "title"];
  const perPageOptions = [12, 24];

  const searchParams = useSearchParams();

  let order = searchParams.get("order")?.toString();
  if (!order || !orderOptions.includes(order)) {
    order = "latest";
  }

  let perPage = searchParams.get("perPage");
  if (!perPage || !perPageOptions.includes(parseInt(perPage))) {
    perPage = 6;
  }

  let page = searchParams.get("page");
  if (!page || isNaN(parseInt(page)) || parseInt(page) < 1 || parseInt(page) > Math.ceil(list.length / perPage)) {
    page = 1;
  }

  return (
    <section className="mt-6 uni-text-color">
      <p className="sr-only">List</p>
      <div className="mx-4 border-4 rounded-xl page-layer-container">
        {/* order articles */}
        <DropDownOption option_name="order" option_lable="ترتيب حسب:" options={[{ "value": "title_asc", "label": "العنوان تصاعدي" }, { "value": "title_dsc", "label": "العنوان تنازلي" }, { "value": "most", "label": "الأكثر عدداً" }, { "value": "least", "label": "الأقل عدداً" }]} />
        {/* number of articles per page */}
        <DropDownOption option_name="perPage" option_lable=" في الصفحة:" options={[{ "value": "12", "label": "12" }, { "value": "24", "label": "24" }]} />

        {/* articles cards */}
        <SliderWithTitleCards list={list} order={searchParams.get('order')?.toString()} perPage={parseInt(searchParams.get('perPage'))} page={parseInt(searchParams.get('page')) || 1} linkPrefix={linkPrefix} />

        {/* pagination */}
        <ListPagination articles={list} perPage={parseInt(perPage)} page={parseInt(page)} />
      </div>
    </section>
  );
}