"use client";
import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { HiSun } from "react-icons/hi";

// TODO: add the darkmode boolean value to the cokies and check if it is in the cookies or not and use that value to set the darkmode state
export default function DarkModeSwitch({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        {children}
        <button onClick={toggleDarkMode} className="absolute left-3 bottom-0" title="dark mode button switch">
          {darkMode ? <HiSun className="text-3xl text-yellow-500" /> : <CgDarkMode className="text-3xl text-gray-500" />}
        </button>
      </div>
    </>
  );
}
