"use client";
import { useState } from "react";
export default function DarkModeSwitch({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        {children}
        <div className="m-3 mx-auto">
          <div className="relative" onClick={toggleDarkMode}>
            <div className="block border-[1px] dark:border-lightAccent-500 border-darkAccent-500 w-14 h-8 rounded-full"></div>
            <div
              className={`dot absolute right-1 dark:right-7 top-1 dark:bg-lightAccent-500 bg-darkAccent-500 w-6 h-6 rounded-full transition duration-200`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
