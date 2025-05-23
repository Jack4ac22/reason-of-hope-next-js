import { FaDotCircle, FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import ArticleCardSkeleton from "./article-card-skelton";
export default function CardSliderSkeleton() {
  return (<>
    <div className="flex-col w-72">
      {/* slider container */}
      <div className="w-72  m-2 relative" aria-live="polite">
        {/* Slider navigation */}
        <div className="flex justify-between items-center uni-text-color text-2xl">
          <button
            className="absolute top-48 right-1 text-2xl hover:animate-pulse hover:text-darkAccent-500 z-10"
            aria-label="Next slide"
          >
            <FaArrowAltCircleRight />
          </button>
          <button
            className="absolute top-48 left-1 text-2xl hover:animate-pulse hover:text-darkAccent-500 z-10"
            aria-label="Previous slide"
          >
            <FaArrowAltCircleLeft />
          </button>
        </div>
      </div>


      {/* Slider */}
      <div className="flex justify-center items-center -z-50">
        <ArticleCardSkeleton />
      </div>


      {/* lower navigation container */}
      <div className="mx-auto w-full z-50 mt-3">
        <div className="flex justify-center items-center p-1 mx-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <FaDotCircle
              key={index + uuidv4()}
              className={`mx-1 uni-text-color hover:text-blue-500`}
            />
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
