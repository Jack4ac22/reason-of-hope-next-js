import { FaWeightHanging, FaHeart } from "react-icons/fa";

export default function ProductModal({ props }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 space-y-10 bg-lightShade-100 dark:bg-darkShade-800 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        <div>
          <img src="/tailwind/product0modal/headphone.png" alt="" className="mx-auto hover:scale-105 duration-200 w-60 bg-lightShade-100 dark:bg-darkShade-800" />
        </div>
        {/* content */}
        <div className="flex flex-col space-y-6 justify-center items-center">
          {/* label and description */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div className="mx-auto">
              <div className=" px-3 py-1 text-sm text-lightShade-100 dark:text-darkShade-800 bg-darkShade-800 dark:bg-lightShade-100 rounded-full select-none">
                Free Shipping
              </div>
            </div>
            {/* description */}
            <div className="max-w-sm text-2xl font-medium mx-auto text-darkShade-800 dark:text-lightShade-200">
              Lorem ipsum dolor sit amet.
            </div>
            {/* price */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left max-w-sm text-darkShade-600 dark:text-lightShade-300">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold  text-action-600 dark:text-action-300">$599</p>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi atque dolores architecto consectetur praesentium?</p>
            </div>
            {/* button group */}
            <div className="group">
              <button className="w-full bg-action-600 dark:bg-action-100 text-action-100 dark:text-action-800 group-hover:bg-action-900 dark:group-hover:bg-action-300 duration-300 rounded-xl transition-all ">
                <div className="px-8 py-4 rounded-xl">
                  add to card
                </div>
              </button>
            </div>
            {/* stock / available */}
            <div className="flex item-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping">
              </div>
              <div className="text-action-600 dark:text-action-300 text-sm">500+ pcs available</div>
            </div>

            {/* buttons */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row  dark:text-lightShade-100 text-darkShade-800">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-lightShade-300 rounded-lg shadow-md hover:bg-opacity-30 hover:shadow-xl hover:translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                <FaWeightHanging className="w-8" />
                <span>add to cart</span>
              </button>

              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-lightShade-300 rounded-lg shadow-md hover:bg-opacity-30 hover:shadow-xl hover:translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                <FaHeart className="w-8" />
                <span>add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}