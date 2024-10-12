"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link"


export default function ArticleAuthors({ article }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "link",
      link: e.target.href,
    });
  }
  const authors = article?.authors || []

  if (authors.length === 0) return null

  return (
    <p className="text-right font-semibold tracking-normal">
      <span>{article?.authors.length === 1 ? "الكاتب: " : "الكتاب: "}</span>
      <span>
        {authors.map((author, index) => {
          if (author.link != "") {
            return (<Link key={index + author.name} href={author.link} onClick={handleLinkClick} className="info-link-button">
              {author.name} {index < authors.length - 1 ? "،" : ""}
            </Link>)
          } else {
            return (<Link key={index + author.name} href={"/about"} className="info-link-button">
              {author.name} {index < authors.length - 1 ? "،" : ""}
            </Link>)
          }
        })}
      </span>
    </p>
  )
}