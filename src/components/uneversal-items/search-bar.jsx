"use client"
import DropDownOption from '@/components/uneversal-items/dropdown-option';
import { FaSearch } from "react-icons/fa";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from 'react';
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";


export default function SearchBar({ categories, articles }) {

  const options = categories.map((category) => ({ value: category.title, label: category.title.replaceAll("-", " ") }));
  options.unshift({ value: "all", label: "جميع الفئات" });


  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [displayedArticles, setDisplayedArticles] = useState([])
  // TODO: prepare the articles in the useEffect by filtering based on filtering criteria.

  const [searchValue, setSearchValue] = useState(() => searchParams.get('search') || "");

  useEffect(() => {
    const searchValueFromUrl = searchParams.get('search');
    if (searchValueFromUrl) {
      setSearchValue(searchValueFromUrl);
    }
  }, [searchParams]);

  function handleTextChange(event) {
    const value = event.target.value;
    setSearchValue(value);

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <section id="search-bar">
        <div className="flex-col md:flex-row items-center m-4 p-6 space-x-6 uni-background rounded-xl shadow-lg">
          <div className="flex bg-gray-100 p-4 space-x-4 rounded-lg focus-within:ring-1">
            <FaSearch className="h-6 w-6 mx-2 opacity-30" />
            <input
              className="bg-gray-100 outline-none"
              type="text"
              placeholder="Article name or keyword ..."
              value={searchValue}
              onChange={handleTextChange}
              name='search'
            />
          </div>
          <div className='flex justify-between items-center content-center md:h-22'>
            <div className="flex py-3 px-4 w-min rounded-lg uni-text-color cursor-pointer">
              <DropDownOption option_name='category' option_lable='الفئات' options={options} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Suspense fallback={<CardsListSkeleton />}>
          <CardList articles={displayedArticles} />
        </Suspense>
      </section>
    </>
  );
}
