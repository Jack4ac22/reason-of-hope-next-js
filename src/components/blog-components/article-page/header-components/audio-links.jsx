"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa6";


export default function AudioLinks({ article }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "link",
      link: article.spotify,
    });
  }
  if (article?.audio?.length === 0 & !article.spotify) return null;
  return (
    <>
      <div className='flex-col'>
        <h3 className="text-مل font-bold">يُمكنكم الإستماع إلى هذا المنشور من خلال المنصات التالية: </h3>
        {/* if spotify then display the link to spotify */}
        {article.spotify && (
          <Link href={article.spotify} onClick={handleLinkClick}>
            <FaSpotify />
          </Link>
        )}
        {/* if audio loop and display the links  */}
      </div>
    </>
  );
}