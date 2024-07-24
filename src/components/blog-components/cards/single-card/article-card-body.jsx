"use client"
import Link from "next/link";
import { MdOutlineVerticalAlignBottom, MdOutlineVerticalAlignTop } from "react-icons/md";
import { useState } from "react";


export default function ArticleCardBody({ article }) {
  const [showDescription, setShowDescription] = useState(true);
  if (article.isBook) {
    return (
      // Book Body
      <>
        {/* <div className="absolute w-full top-2 bg-lightShade rounded-xl p-1
      animate-slideDownAndAppear delay-100 bg-opacity-50">
          <p className="text-lg text-center">{article.title}</p>
        </div> */}
        <div className={`absolute w-full top-2 bg-lightShade rounded-xl p-3
      animate-slideDown  flex flex-col items-center justify-start duration-200 ${!showDescription ? ' bg-opacity-100' : ' bg-opacity-50'}`}>
          {/* hidden description */}
          <div className={`${showDescription ? 'hidden' : ''}  flex flex-col items-center justify-start`}>

            <p className="text-sm text-center">{article.description}</p>
            {/* seperator */}
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
            <Link href={`/articles/${article.slug}`} className="inline-flex my-1 text-white bg-mainBrand border-0 py-1 px-6 focus:outline-none hover:brightness-90 rounded">اقرأ المزيد</Link>
          </div>
          {/* show/hide description button */}
          <div className={`cursor-pointer flex flex-col justify-center ${!showDescription ? 'hidden' : ''}`} >
            <MdOutlineVerticalAlignBottom onClick={() => setShowDescription(false)} />
            <span className="text-nowrap">
              إظهار التفاصيل</span>
          </div>

          <MdOutlineVerticalAlignTop onClick={() => setShowDescription(true)} className={`cursor-pointer ${showDescription ? 'hidden' : ''}`} />
        </div>
      </>
    );
  } else {
    return (
      // articles Body
      <>
        <h4>
          {article.title}
        </h4>
        <date date={article.date}>{article.date}</date>
        <p className="p-2 text-sm text-justify">
          {article.description}
        </p>
        <Link href={`/articles/${article.slug}`} className="inline-flex my-1 text-white bg-mainBrand border-0 py-1 px-6 focus:outline-none hover:brightness-90 rounded text-center mx-auto">اقرأ المزيد</Link>
      </>
    )
  }
}