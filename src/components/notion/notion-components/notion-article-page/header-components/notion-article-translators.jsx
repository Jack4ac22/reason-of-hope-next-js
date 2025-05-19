"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link"


export default function NotionArticleTranslators({ article, contributers }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    if (e.target.hre.includes("http")) {
      e.preventDefault();
      setLayoverObject({
        type: "link",
        link: e.target.href,
      });
    }
    else return
  }
  const filteredTranslators = contributers.filter(contributer => article.translators.includes(contributer.id))
  const translators = filteredTranslators || []
  if (translators.length === 0) return null
  return (
    <p className="text-right font-semibold tracking-normal">
      <span>قام بالترجمة: </span>
      <span>
        {translators.map((translator, index) => {
          return (
            <Link key={index + translator.name} href={translator.url == "/" ? "/about" : translator.url} onClick={handleLinkClick} className="info-link-button">
              {translator.name} {index < translators.length - 1 ? "،" : ""}
            </Link>
          )
        })}
      </span>
    </p>
  )
}