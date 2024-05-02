'use client';
import Link from 'next/link'
import { useState } from "react";
export default function DesignPageLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <nav>
        <ul className='flex flex-wrap'>
          <li>
            <Link href='/mini-projects/email-subscribe' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center ">
              email-subscribe
            </Link>
          </li>
          <li>
            <Link href='/mini-projects/image-gallery' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold w-full text-sm rounded-sm flex items-center justify-center">
              image-gallery
            </Link>
          </li>
          <li>
            <Link href='/mini-projects/login-modal' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              login-modal
            </Link>
          </li>
          <li>
            <Link href='/mini-projects/pricing-cards' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              pricing-cards
            </Link>
          </li>
          <li>
            <Link href='/mini-projects/product-modal' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              product-modal
            </Link>
          </li>
        </ul>
      </nav >
      <div className={`${darkMode && "dark"}`}>
        <div className="relative" onClick={toggleDarkMode}>
          <div className="block border-[1px] dark:border-darkShade-500 border-darkAccent-200 w-14 h-8 rounded-full"></div>
          <div className={`dot absolute left-1 dark:left-7 top-1 dark:bg-darkShade-500 bg-darkAccent-200 w-6 h-6 rounded-full transition duration-200`}></div>
        </div>
        {children}
      </div>
    </>
  )
}