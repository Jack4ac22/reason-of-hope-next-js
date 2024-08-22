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
  const isFullWidth = objectElement.alt.toLowerCase().includes("full") || objectElement.src.toLowerCase().includes("width=full");
  const isLargeWidth = objectElement.alt.toLowerCase().includes("large") || objectElement.src.toLowerCase().includes("width=large");
  const isSmallWidth = objectElement.alt.toLowerCase().includes("small") || objectElement.src.toLowerCase().includes("width=small");
  const isFloatRight = objectElement.src.toLowerCase().includes("position=right");
  const isFloatLeft = objectElement.src.toLowerCase().includes("position=left");
  const isFloatCenter = objectElement.src.toLowerCase().includes("position=center");
  return (
    <figure className={`container-fluid my-2
      ${isFullWidth ? "w-100 md:max-w-xl lg:max-w-2xl" : ""}
      ${isLargeWidth ? "lg:w-3/4 max-w-2xl" : ""}
      ${!isFullWidth && !isLargeWidth ? "w-full md:w-1/2 lg:w-1/3" : ""}
      ${isFloatRight ? "float-right" : ""}
      ${isFloatLeft ? "float-left" : ""}
      ${isFloatCenter ? "mx-auto block" : ""}
      ${!isFloatCenter && !isFloatLeft && !isFloatRight ? "float-start" : ""}
  `}>
      <Image src={`/blog_images/${objectElement.src}`} alt={objectElement.alt}
        className={`object-cover w-full `}
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
      <figcaption className="figure-caption text-break">
        {objectElement.alt ? objectElement.alt : ""}
        {objectElement.src ? objectElement.src : ""}
      </figcaption>
    </figure>)
}


