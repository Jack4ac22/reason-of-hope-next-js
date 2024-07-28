"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Image from "next/image";
export default function ImageMappingComponent({ objectElement }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "image",
      imageDetails: {
        src: objectElement.src,
        alt: objectElement.alt
      }
    });
  }
  return (
    <>
      <Image src={`/blog_images/${objectElement.src}`} alt={objectElement.alt}
        className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:max-w-xl lg:max-w-4xl mx-auto"
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
    </>
  )
}


