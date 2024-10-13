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
  return (
    // TODO: create a component to fetch the link content and display it on the top of the page, maybe using context.
    <>
      <Link href={objectElement.href} className="text-mainBrand-600 dark:text-mainBrand-200 hover:underline px-2" onClick={handleLinkClick} aria-label={objectElement.children}>{objectElement.children}</Link>
    </>
  )
}


