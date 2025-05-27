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

  let isFullWidth = objectElement?.alt?.toLowerCase()?.includes("full") || objectElement?.src?.toLowerCase()?.includes("width=full");
  let isLargeWidth = objectElement?.alt?.toLowerCase()?.includes("large") || objectElement?.src?.toLowerCase()?.includes("width=large");
  let isSmallWidth = objectElement?.alt?.toLowerCase()?.includes("small") || objectElement?.src?.toLowerCase()?.includes("width=small");
  let isFloatLeft = objectElement?.src?.toLowerCase()?.includes("position=left");
  let isFloatCenter = objectElement?.src?.toLowerCase()?.includes("position=center");
  let isFloatRight = objectElement?.src?.toLowerCase()?.includes("position=right") || objectElement?.src?.toLowerCase()?.includes("right");
  let hiddenDescription = objectElement?.src?.toLowerCase()?.includes("description=hidden");
  isSmallWidth = !isLargeWidth & !isFullWidth;
  isFloatRight = !isFloatCenter & !isFloatLeft &isSmallWidth;

  // console.info("******", objectElement?.src, "*******", "\n", "size", isFullWidth ? "full" : "", isLargeWidth ? "large" : "", isSmallWidth ? "small" : "", "\n", "float", isFloatLeft ? "left" : "", isFloatCenter ? "center" : "", isFloatRight ? "right" : "");

  function sanitizestring(string) {
    const response = string.replace(/(small|full|large|left|right|center|position=\\w+|width=\\w+|description=hidden)/gi, '').trim();
    return response;
  }

  const figureClass = [
    'my-2',
    isFullWidth || isLargeWidth ? 'mx-auto block' : 'container-fluid',
    isFullWidth ? 'w-100 md:max-w-2xl' : '',
    isLargeWidth ? 'lg:w-3/4 max-w-2xl' : '',
    isSmallWidth ? 'w-full md:w-1/3 lg:w-1/3' : '',
    isFloatRight ? 'md:float-right md:ml-2' : '',
    isFloatLeft ? 'md:float-left md:mr-2' : '',
    isFloatCenter ? 'mx-auto block' : '',
  ].join(' ');

  const imageClass = [
    'object-cover w-full rounded-lg',
    isSmallWidth ? "max-h-144" : "",
    (isSmallWidth & isFloatLeft) ? "pr-3" : "",
    (isSmallWidth & isFloatRight) ? "pl-3" : "",
  ].join(' ');
  
  return (
    <figure className={figureClass}>
      <Image src={`/blog_images/${objectElement.src}`} alt={objectElement.alt}
        className={imageClass}
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
      {hiddenDescription || (<figcaption className="figure-caption text-break uni-text-color text-center border-b border-double">
        {sanitizestring(objectElement.alt)}
      </figcaption>)}
    </figure>)
}


