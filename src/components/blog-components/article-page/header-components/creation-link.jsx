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
      <Link href={article.creationLink || '#'} onClick={handleLinkClick}>
        هذا المقال من موقع Creation.com - اضغط هنا لزيارة الموقع
      </Link>
    );
  }

  return null;
}