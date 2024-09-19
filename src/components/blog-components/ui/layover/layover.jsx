"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import LinkLayover from "@/components/blog-components/ui/layover/link-layover";
import ImageLayover from "@/components/blog-components/ui/layover/image-layover";
import { FaRegWindowClose } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LayOverSection() {
  function handleCloseLayover() {
    setLayoverObject(null);
  }

  const { layoverObject, setLayoverObject } = useLayoverGlobal();
  return (
    layoverObject && (
      <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center content-center overflow-auto " onClick={handleCloseLayover}>
        <div className="max-w-[80vw] max-h-[80vh] border rounded-xl bg-lightShade">
          <header className="flex justify-between text-mainBrand uni-background uni-text-color rounded-t-xl">
            {
              layoverObject.type === "link" && <Link href={layoverObject.link} target='_blank' className="m-2 flex space-x-3">
                <span >
                  قم بزيارة الرابط
                </span>
                <FaExternalLinkAlt />
              </Link>
            }
            {layoverObject.type === "link" && (<span className="m-2">المعلومات الواردة في هذه النافذة من مصدر خارجي.</span>)}

            {layoverObject.type === "image" && <><span className="m-2">لعرض الصورة بحجمها الكامل</span><Link href={`/blog_images/${layoverObject.imageDetails.src}`} className="m-2">اضغط هنا</Link></>}
            <button className="m-2" onClick={handleCloseLayover}>
              <FaRegWindowClose />
              <span className="sr-only">Close Layover</span>
            </button>
          </header>
          {/* {layoverObject.link} */}
          {layoverObject.type === "link" && <LinkLayover layoverObject={layoverObject} />}
          {/* layover image */}
          {layoverObject.type === "image" && <>
            <ImageLayover layoverObject={layoverObject} />
          </>
          }
        </div>
      </section>
    )
  )
}