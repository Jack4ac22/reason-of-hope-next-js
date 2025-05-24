"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import LinkLayover from "@/components/blog-components/ui/layover/link-layover";
import ImageLayover from "@/components/blog-components/ui/layover/image-layover";
import PdfLayover from "@/components/blog-components/ui/layover/pdf-layover";
import { FaRegWindowClose } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function LayOverSection() {
  function handleCloseLayover() {
    setLayoverObject(null);
  }

  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  return (
    layoverObject && (
      <section className="m-0 p-0 fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center content-center" onClick={handleCloseLayover}>

        <div className="w-[80vw] h-min max-h-[80vh] border rounded-xl bg-lightShade">
          <header className="flex justify-between text-mainBrand uni-background uni-text-color rounded-t-xl h-min">
            {
              layoverObject.type === "link" && <Link href={layoverObject.link} target='_blank' className="m-2 flex space-x-3 info-link-button">
                <span >
                  قم بزيارة الرابط
                </span>
                <FaExternalLinkAlt />
              </Link>
            }
            {layoverObject.type === "link" && (<span className="m-2 hover:text-danger-500 hover:animate-pulse">المعلومات الواردة في هذه النافذة من مصدر خارجي.</span>)}
            {layoverObject.type === "image" && <p><span className="m-2">لعرض الصورة بحجمها الكامل</span><Link href={`/blog_images/${layoverObject.imageDetails.src}`} className="m-2 info-link-button">{" اضغط هنا "}</Link></p>}
            {layoverObject.type === "pdf" && <p><span className="m-2">يمكنكم الحصول على الملف بحجمه الكامل</span><Link href={`/publications/${layoverObject.pdfDetails.link}`} className="m-2 info-link-button">{" اضغط هنا "}</Link></p>}
            <button className="m-2 text-danger-500" onClick={handleCloseLayover}>
              <FaRegWindowClose />
              <span className="sr-only">Close Layover</span>
            </button>
          </header>
          <div className="h-[70vh] bg-lightShade-500 dark:bg-lightShade-800">
            {/* {layoverObject.link} */}
            {layoverObject.type === "link" && <LinkLayover layoverObject={layoverObject} />}
            {/* layover image */}
            {layoverObject.type === "image" && <ImageLayover layoverObject={layoverObject} />}
            {/* layover pdf */}
            {layoverObject.type === "pdf" && <PdfLayover layoverObject={layoverObject} />}
          </div>
        </div>
      </section>
    )
  )
}