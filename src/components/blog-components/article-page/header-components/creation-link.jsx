"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link"

export default function CreationLink({ article }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "link",
      link: e.target.href,
    });
  }
  if (article?.creationLink) {
    return (
      <div className="flex justify-center  print:hidden">
        <Link href={article.creationLink || '#'} onClick={handleLinkClick} className="info-link-button">
          متوفر  أيضاً من موقع إرساليات الخلق الدولية
        </Link>
      </div>
    );
  }

  return null;
}