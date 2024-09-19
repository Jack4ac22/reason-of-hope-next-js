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
  const isLargeWidth = objectElement.alt.toLowerCase().includes("large") || objectElement.src.toLowerCase().includes("width=large" || (!isFullWidth
    && isLargeWidth));
  const isSmallWidth = objectElement.alt.toLowerCase().includes("small") || objectElement.src.toLowerCase().includes("width=small");
  const isFloatRight = objectElement.src.toLowerCase().includes("position=right");
  const isFloatLeft = objectElement.src.toLowerCase().includes("position=left");
  const isFloatCenter = objectElement.src.toLowerCase().includes("position=center");
  const hiddenDescription = objectElement.src.toLowerCase().includes("description=hidden");

  function sanitizestring(string){
    const response = string.replaceAll("small", "").replaceAll("full", "")
  }
  return (
    <figure className={`container-fluid my-2
      ${isFullWidth ? "w-100 md:max-w-2xl block " : ""}
      ${isLargeWidth ? "lg:w-3/4 max-w-2xl" : ""}
      ${!isFullWidth && !isLargeWidth ? "w-full md:w-1/2 lg:w-1/3" : ""}
      ${isFloatRight || (!isFloatCenter && !isFloatLeft) ? "float-right md:ml-2" : ""}
      ${isFloatLeft ? "float-left md:mr-2" : ""}
      ${isFloatCenter ? "mx-auto block" : ""}
      ${!isFloatCenter && !isFloatLeft && !isFloatRight ? "float-right" : ""}
  `}>
      <Image src={`/blog_images/${objectElement.src}`} alt={objectElement.alt}
        className={`object-cover w-full
        ${isSmallWidth && " max-h-144 "}
        ${isSmallWidth && isFloatLeft && "md:rounded-l-lg pr-3"}
        ${isSmallWidth && isFloatRight && "md:rounded-r-lg pl-3"}
        ${isSmallWidth && !isFloatRight && !isFloatLeft && "md:rounded-r-lg pl-3"}
        ${isSmallWidth && isFloatCenter && "rounded-lg"}}
        ${isFullWidth && "rounded-lg"}
        `}
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
      {hiddenDescription || (<figcaption className="figure-caption text-break uni-text-color text-center border-b border-double p-2">
        {objectElement.alt}
      </figcaption>)}
    </figure>)
}


