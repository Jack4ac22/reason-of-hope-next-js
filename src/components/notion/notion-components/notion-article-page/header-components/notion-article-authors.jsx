"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link"


export default async function NotionArticleAuthors({ article, contributers }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "link",
      link: e.target.href,
    });
  }
  const authors = article?.authors || []

  if (authors.length === 0) return <></>
  const filteredAuthors = contributers.filter(contributer => article.authors.includes(contributer.id))
  return (
    <p className="text-right font-semibold tracking-normal">
      <span>{article?.authors.length === 1 ? "الكاتب: " : "الكتاب: "}</span>
      <span>
        {filteredAuthors.map((author, index) => {
          if (author.url != "") {
            return (<Link key={index + author.name} href={author.url} onClick={handleLinkClick} className="info-link-button">
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
  );
}