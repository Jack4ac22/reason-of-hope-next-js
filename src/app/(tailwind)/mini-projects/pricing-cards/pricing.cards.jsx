import { FaCheck } from "react-icons/fa6";
import Link from "next/link"
export default function PricingCards({ featured }) {
  return (
    <>
      <div className={`${featured ? "bg-action-700 transform scale-105" : "bg-darkAccent-700 dark:bg-lightAccent-100 "} text-mainBrand-700 dark:text-mainBrand-100 rounded-xl  duration-1000`}>
        {/* upper container */}
        <div className="p-8 mx-3 mt-3 rounded-t-xl dark:bg-darkAccent-800 bg-lightAccent-200">
          <div className="text-center uppercase">
            Basic
          </div>
          <h2 className="mt-10 font-serif text-5xl text-center">100 GB</h2>
          <h3 className="mt-2 text-center">199/Month</h3>
          <div className="flex justify-center"><Link href={`#`} className={`inline-block px-10 py-3 my-6 text-center border border-action-300 dark:border-action-600 hover:border-action-200 hover:dark:border-action-800 hover:bg-action-300 hover:dark:bg-action-800 duration-200 rounded-2xl ${featured && "bg-action-200 dark:bg-action-600"}`}>Purchase</Link>
          </div>
        </div>
        {/* middle container */}

        <div className="border-t border-darkAccent-700 dark:border-lightAccent-100"></div>

        {/* lowe container */}
        <div className="p-8 mx-3 mb-3 rounded-b-xl dark:bg-darkAccent-800 bg-lightAccent-200">
          {/* list */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center">
              <FaCheck />
              <span className="text-sm ml-1">100 GB of storage</span>
            </div>
            <div className="flex justify-center">
              <FaCheck />
              <span className="text-sm ml-1">Option to add members</span>
            </div>
            <div className="flex justify-center">
              <FaCheck />
              <span className="text-sm ml-1">Extra member benefits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}