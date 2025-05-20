"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Image from "next/image";
function sanitizeImageSource(src) {
  return src.startsWith("http") || src.startsWith("https") ? src : `/blog_images/${src}`
}
export default function NotionImage({ imageData }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();

  const src = imageData.type === "external" ? imageData.external.url : imageData.file.url;
  const alt = imageData.caption?.[0]?.plain_text || '';

  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "image",
      imageDetails: {
        src: src,
        alt: sanitizestring(alt) ?? ""
      }
    });
  }

  let isFullWidth = alt?.toLowerCase().includes("full") || src?.toLowerCase().includes("width=full");
  let isLargeWidth = alt?.toLowerCase().includes("large") || src?.toLowerCase().includes("width=large" || (!isFullWidth
    && isLargeWidth));
  let isSmallWidth = alt?.toLowerCase().includes("small") || src.toLowerCase().includes("width=small");

  let isFloatLeft = src?.toLowerCase().includes("left") || alt?.toLowerCase().includes("left") || src?.toLowerCase().includes("position=left");
  let isFloatCenter = src?.toLowerCase().includes("position=center") || src?.toLowerCase().includes("center") || alt?.toLowerCase().includes("center");
  let isFloatRight = src?.toLowerCase().includes("position=right") || src?.toLowerCase().includes("right") || alt?.toLowerCase().includes("right") || src?.toLowerCase().includes("position=right");

  let hiddenDescription = src?.toLowerCase().includes("description=hidden");

  isFloatRight = !isFloatCenter && !isFloatLeft
  isSmallWidth = !isFullWidth && !isLargeWidth

  function sanitizestring(string) {
    return !string ? "" : string?.replaceAll("small", "")?.replaceAll("full", "").replaceAll("large", "").replaceAll("left", "").replaceAll("right", "").replaceAll("center", "").replaceAll("position=", "").replaceAll("width=", "").replaceAll("description=hidden", "");
  }
  const figureClass = [
    "my-2",
    isFullWidth || isLargeWidth ? "mx-auto block" : "container-fluid",
    isFullWidth ? "w-100 md:max-w-2xl" : "",
    isLargeWidth ? "lg:w-3/4 max-w-2xl" : "",
    (!isFullWidth && !isLargeWidth) ? "w-full md:w-1/2 lg:w-1/3" : "",
    (isFloatRight || (!isFloatCenter && !isFloatLeft && !isFullWidth && !isLargeWidth)) ? "md:float-right md:ml-2" : "",
    isFloatLeft ? "md:float-left md:mr-2" : "",
    isFloatCenter ? "mx-auto block" : "",
  ].filter(Boolean).join(' ');

  const imageClass = [
    "object-cover w-full sm:rounded-xl",
    isSmallWidth ? "max-h-144" : "",
    (isSmallWidth && isFloatLeft) ? "md:rounded-l-lg pr-3" : "",
    (isSmallWidth && isFloatRight) ? "md:rounded-r-lg pl-3" : "",
    (isFloatRight && !isFullWidth && !isLargeWidth ) ? "md:rounded-r-lg pl-3" : "",
    (isFloatLeft ) ? "md:rounded-l-lg pr-3" : "",
    (isFloatCenter ) ? "rounded-lg" : "",
    (isSmallWidth && isFloatCenter) ? "rounded-lg" : "",
    isFullWidth ? "rounded-lg" : ""
  ].filter(Boolean).join(' ');

  const captionClass = `figure-caption text-break uni-text-color text-center border-b border-double`

  return (
    <figure className={figureClass}>
      <Image src={src} alt={alt}
        className={imageClass}
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
      {sanitizestring(alt).trim() && !hiddenDescription && (<figcaption className={captionClass}>
        {sanitizestring(alt)}
      </figcaption>)}
    </figure>)
}


