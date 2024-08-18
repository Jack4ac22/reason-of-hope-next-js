'use client'
import { useState } from "react";
import { FaInfoCircle, FaRegWindowClose } from "react-icons/fa";

export default function ShowInformation({ inlineText, children }) {
  const [showInformation, setShowInformation] = useState(false)
  return (
    <>
      {/* section container */}
      <div className="group animate duration-200 focuse:outline-2">
        {/* show the full details of the article */}
        <button className=" absolute bottom-3 right-2 flex items-center text-mainBrand-500 cursor-pointer hover:text-mainBrand-600 dark:text-mainBrand-300 dark:hover:bg-mainBrand-200
        focus:text-xl focus:drop-shadow-2xl focus:outline-2"
          onClick={() => { setShowInformation(true) }}>
          <FaInfoCircle className="absolute hover:translate-y-0.5 hover:animate-ping" />
          <span className=" right-0 sr-only">إظهار المعلومات</span>
          <div className="relative">
            <div className="absolute bottom-10 hidden group-hover:inline-block w-64 px-4 py-3 mb-1 -ml-32 text-mainBrand-600 dark:text-mainBrand-200
            bg-mainBrand-100 dark:bg-mainBrand-800 
            border-2 border-mainBrand-500 dark:border-mainBrand-200 rounded-lg
            shadow-md">
              <span className="inline-block text-sm text-center leading-tight">{inlineText}</span>
            </div>
          </div>
        </button>
        {/* article informations section */}
        <div className={` w-72 h-96 border rounded-md absolute top-0 left-0 p-4 flex-col items-center bg-lightShade-500 dark:bg-lightShade-800 ${showInformation ? 'opacity-90' : 'hidden'}`} onClick={() => { setShowInformation(false) }}>
          <button className="m-2 text-mainBrand-500" onClick={() => { setShowInformation(false) }
          }>
            <span className="sr-only">Close the information card.</span>
            <FaRegWindowClose />
          </button>
          {children}
        </div>

      </div>
    </>
  )
}