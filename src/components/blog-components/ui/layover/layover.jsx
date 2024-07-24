"use client";
import { useLayoverGlobal } from "@/context/layover/LayoverGlobalContext";
import LinkLayover from "@/components/blog-components/ui/layover/link-layover";
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
      <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center content-center" onClick={handleCloseLayover}>
        <div className="w-[80vw] h-[80vh] border rounded-xl bg-lightShade">
          <header className="flex justify-between text-mainBrand">
            {
              layoverObject.type === "link" && <Link href={layoverObject.link} target='_blank' className="m-2 flex space-x-3">
                <span >
                  قم بزيارة الرابط
                </span>
                <FaExternalLinkAlt />
              </Link>
            }
            <span className="m-2">المعلومات الواردة في هذه النافذة من مصدر خارجي.</span>
            <button className="m-2" onClick={handleCloseLayover}>
              <FaRegWindowClose />
              <span className="sr-only">Close Layover</span>
            </button>
          </header>
          {layoverObject.type === "link" && <LinkLayover layoverObject={layoverObject} />}
          {/* {layoverObject.link} */}

        </div>
      </section>
    )
  )
}