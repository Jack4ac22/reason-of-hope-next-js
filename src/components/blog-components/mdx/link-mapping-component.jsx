"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Link from "next/link";
export default function LinkMappingComponent({ objectElement }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "link",
      link: objectElement.href,
    });
  }
  console.log(objectElement.href)
  if (objectElement.href.startsWith("#")) {
    return (
      <Link href={objectElement.href} className="text-mainBrand-600 dark:text-mainBrand-200 hover:underline px-2" aria-label={objectElement.children}>{objectElement.children}</Link>
    )
  } else {
    return (
      <Link href={objectElement.href} className="text-mainBrand-600 dark:text-mainBrand-200 hover:underline px-2" onClick={handleLinkClick} aria-label={objectElement.children}>{objectElement.children}</Link>
    )
  }
}


