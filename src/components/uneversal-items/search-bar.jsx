'use client';
import DropDownOption from '@/components/uneversal-items/dropdown-option';
export default function SearchBar({ categories }) {
  const options = categories.map((category) => ({ value: category, label: category.replaceAll("-", " ") }));
  return (
    <section id="seatch-bar">
      <div className="flex items-center p-6 space-x-6 uni-background rounded-xl shadow-lg">
        <div className="flex bg-gray-100 p-4 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
        </div>

        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <DropDownOption option_name='category' option_lable='الفئات' options={options} />
        </div>
        <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span>ابحث</span>
        </div>
      </div>
    </section>);
}