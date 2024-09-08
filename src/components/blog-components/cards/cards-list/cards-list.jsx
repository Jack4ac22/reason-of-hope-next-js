'use client';
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import DisplayedCards from "@/components/blog-components/cards/cards-list/list-components/cards";
import DropDownOption from "@/components/uneversal-items/dropdown-option";
import ListPagination from "@/components/uneversal-items/pagination";

export default function CardList({ articles }) {
  const orderOptions = ["latest", "oldest", "title"];
  const perPageOptions = [6, 12, 24];

  const pathname = usePathname()
  const { replace } = useRouter();
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
  if (!page || isNaN(parseInt(page)) || parseInt(page) < 1 || parseInt(page) > Math.ceil(articles.length / perPage)) {
    page = 1;
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <section className="mt-6 uni-text-color">
      <p className="sr-only">Articles</p>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mx-4 border-4 rounded-xl">
          {/* order articles */}
          <DropDownOption option_name="order" option_lable="ترتيب حسب:" options={[{ "value": "latest", "label": "الأحدث" }, { "value": "oldest", "label": "الأقدم" }, { "value": "title_asc", "label": "العنوان تصاعدي" }, { "value": "title_dsc", "label": "العنوان تنازلي" }]} />
          {/* number of articles per page */}
          <DropDownOption option_name="perPage" option_lable="عدد المقالات في الصفحة:" options={[{ "value": "6", "label": "6" }, { "value": "12", "label": "12" }, { "value": "24", "label": "24" }]} />
          {/* articles cards */}
          <DisplayedCards articles={articles} order={searchParams.get('order')?.toString()} perPage={parseInt(searchParams.get('perPage'))} page={parseInt(searchParams.get('page'))} />
          {/* pagination */}
          <ListPagination articles={articles} perPage={parseInt(perPage)} page={parseInt(page)} />
        </div>
      </Suspense>
    </section>
  );
}