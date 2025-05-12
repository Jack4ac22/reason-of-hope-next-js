"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import Image from "next/image";
function sanitizeImageSource(src) {
  return src.startsWith("http") ? src : `/blog_images/${src}`

}
export default function ImageMappingComponent({ objectElement }) {
  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  const imageSource = sanitizeImageSource(objectElement.src);
  function handleLinkClick(e) {
    e.preventDefault();
    setLayoverObject({
      type: "image",
      imageDetails: {
        src: imageSource,
        alt: objectElement?.alt ?? ""
      }
    });
  }

  const isFullWidth = objectElement?.alt?.toLowerCase().includes("full") || objectElement?.src.toLowerCase().includes("width=full");
  const isLargeWidth = objectElement?.alt?.toLowerCase().includes("large") || objectElement?.src.toLowerCase().includes("width=large" || (!isFullWidth
    && isLargeWidth));
  const isSmallWidth = objectElement?.alt?.toLowerCase().includes("small") || objectElement?.src.toLowerCase().includes("width=small");

  const isFloatLeft = objectElement?.src?.toLowerCase().includes("left") || objectElement?.alt?.toLowerCase().includes("left");
  const isFloatCenter = objectElement?.src?.toLowerCase().includes("position=center");
  const isFloatRight = objectElement?.src?.toLowerCase().includes("position=right") || objectElement?.src?.toLowerCase().includes("right");

  const hiddenDescription = objectElement?.src?.toLowerCase().includes("description=hidden");

  function sanitizestring(string) {
    return !string ? "" : string?.replaceAll("small", "")?.replaceAll("full", "")
  }
  // The figure is either full width, large width, or small width, if not identifies then it is small width. float left, right, center, or none. if none it is float right unless the width is larg or full. If the width is large or full then it is centered.
  const figureClass = `my-2 ${isFullWidth || isLargeWidth ? "mx-auto block" : "container-fluid"} ${isFullWidth ? "w-100 md:max-w-2xl" : ""} ${isLargeWidth ? "lg:w-3/4 max-w-2xl" : ""} ${(!isFullWidth & !isLargeWidth) ? "w-full md:w-1/2 lg:w-1/3" : ""} ${(isFloatRight || (!isFloatCenter & !isFloatRight & !isFullWidth & !isLargeWidth)) ? "md:float-right md:ml-2" : ""} ${isFloatLeft ? "md:float-left md:mr-2" : ""} ${isFloatCenter ? "mx-auto block" : ""}`

  const imageClass = `object-cover w-full ${isSmallWidth ? "max-h-144" : ""} ${(isSmallWidth & isFloatLeft) ? "md:rounded-l-lg pr-3" : ""} ${(isSmallWidth & isFloatRight) ? "md:rounded-r-lg pl-3 " : ""} ${(isSmallWidth & !isFloatRight & !isFloatLeft) ? "md:rounded-r-lg pl-3 " : ""} ${(isSmallWidth & isFloatCenter) ? "rounded-lg" : ""} ${isFullWidth ? "rounded-lg" : ""}`

  const captionClass = `figure-caption text-break uni-text-color text-center border-b border-double`
  return (
    <figure className={figureClass}>
      <Image src={imageSource} alt={objectElement.alt}
        className={imageClass}
        sizes="100vw"
        height={0}
        width={0}
        onClick={handleLinkClick} />
      {hiddenDescription || (<figcaption className={captionClass}>
        {sanitizestring(objectElement.alt)}
      </figcaption>)}
    </figure>)
}


