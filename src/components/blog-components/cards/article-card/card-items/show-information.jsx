'use client'
import { FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
export default function ShowInformation({ article, children }) {
  const [showInformation, setShowInformation] = useState(false)
  return (
    <>
      {/* section container */}
      <div className="group animate duration-200">
        {/* show the full details of the article */}
        <div className="relative flex items-center text-mainBrand-500 cursor-pointer hover:text-mainBrand-600 dark:text-mainBrand-300 dark:hover:bg-mainBrand-200">
          {/* clickable icon to show more */}
          <span className="absolute right-0 sr-only">إظهار المعلومات</span>
          <FaCaretUp className="absolute hover:translate-y-0.5 hover:animate-ping" onClick={() => { setShowInformation(true) }} />
          <div className="relative">
            <div className="absolute bottom-0 hidden group-hover:inline-block w-64 px-4 py-3 mb-1 -ml-32 text-mainBrand-600 dark:text-mainBrand-200
            bg-mainBrand-100 dark:bg-mainBrand-800 
            border-2 border-mainBrand-500 dark:border-mainBrand-200 rounded-lg
            shadow-md">
              <span className="inline-block text-sm text-center leading-tight text-">إضغط  للحصول على المزيد من المعلومات المرتبطة بهذا المنشور.</span>
            </div>
          </div>
        </div>
        <div className={`w-72 h-96 border rounded-md absolute top-0 left-0 p-4 flex-col items-center bg-lightShade-500 dark:bg-lightShade-800 ${showInformation ? 'opacity-90' : 'hidden'}`} onClick={() => { setShowInformation(false) }}>
        <button className="m-2 text-mainBrand-500" onClick={() => { setShowInformation(false) }
        }>
          <FaRegWindowClose />
          <span className="sr-only">Close the information card.</span>
        </button>
          {children}
        </div>
      </div>
    </>
  )
}