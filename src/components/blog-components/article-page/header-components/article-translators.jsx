"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link"


export default function ArticleTranslators({ article }) {
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

  function adjustLocalLink(link) {
    if (link === "" || link === undefined || link === null || link === "#") return "/about"
  }

  const translators = article?.translators || []

  if (translators.length === 0) return null

  return (
    <p className="text-right font-semibold tracking-normal">
      <span>قام بالترجمة: </span>
      <span>
        {translators.map((translator, index) => {
          return (
            <Link key={index + translator.name} href={adjustLocalLink(translator.link)} onClick={handleLinkClick} className="info-link-button">
              {translator.name} {index < translators.length - 1 ? "،" : ""}
            </Link>
          )
        })}
      </span>
    </p>
  )
}