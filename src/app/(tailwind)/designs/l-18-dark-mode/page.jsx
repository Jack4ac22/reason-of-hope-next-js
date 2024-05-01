'use client';
import { useState } from "react";
export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>

      <div className={`${darkMode && "dark"}`}>
        <div className="container mx-auto mt-10 bg-lightAccent dark:bg-darkAccent rounded-xl px-6 py-8 shadow-xl">
          <div className="m-3 mx-auto">
            <div className="relative" onClick={toggleDarkMode}>
              <div className="block border-[1px] dark:border-lightAccent border-darkAccent w-14 h-8 rounded-full"></div>
              <div className={`dot absolute left-1 dark:left-7 top-1 dark:bg-lightAccent bg-darkAccent w-6 h-6 rounded-full transition duration-200`}></div>
            </div>
          </div>
          <h3 className="text-slate-900 dark:text-lightAccent font-medium tracking-tight">Lorem ipsum dolor sit.</h3>
          <p className="text-darkAcccent dark:text-lightAccent mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat omnis, ullam magni debitis nostrum dolorem nemo rerum maiores provident!
          </p>
        </div>
      </div>
    </>
  )
}
