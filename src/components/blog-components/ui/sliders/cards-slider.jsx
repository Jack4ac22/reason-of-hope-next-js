'use client';
import { useState, useEffect } from "react";
import { randomArticlesFromArray } from "@/utils/blog/general-functions";
import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaDotCircle } from "react-icons/fa";



/**
 * Renders a card slider component.
 *
 * @component
 * @param {Object[]} articles - The array of articles to display in the slider.
 * @returns {JSX.Element} The card slider component.
 */
export default function CardSlider({ articles }) {

  const slicedArticles = articles?.length > 5 ? randomArticlesFromArray(articles, 5) : articles;

  function handleNextSlide() {
    setCurrentIndex((currentIndex + 1) % slicedArticles.length);
  }

  function handlePrevSlide() {
    setCurrentIndex((currentIndex - 1 + slicedArticles.length) % slicedArticles.length);
  }

  let [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slicedArticles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slicedArticles.length]);


  return (
    <>
      {/* slider container */}
      <div className="w-72 h-96 m-2 relative" aria-live="polite">
        {/* Slider navigation */}
        <div className="flex justify-between items-center uni-text-color text-2xl">
          <button
            className="absolute top-48 right-1 hover:animate-pulse hover:text-darkAccent-500 z-50"
            onClick={handlePrevSlide}
            aria-label="Next slide"
          >
            <FaArrowAltCircleRight />
          </button>
          <button
            className="absolute top-48 left-1 hover:animate-pulse hover:text-darkAccent-500 z-50"
            onClick={handleNextSlide}
            aria-label="Previous slide"
          >
            <FaArrowAltCircleLeft />
          </button>
        </div>

        {/* lower navigation container */}
        <div className="absolute bottom-0 mx-auto w-full z-50">
          <div className="flex justify-center items-center p-1 mx-auto">
            {slicedArticles.map((article, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="mx-1"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <FaDotCircle
                  key={index}
                  className={`mx-1 ${index === currentIndex && " animate-pulse "} uni-text-color hover:text-blue-500`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center -z-50">
          {slicedArticles.map((article, index) => (
            index === currentIndex && (
              <div key={`${index}-${article?.title}`} className="animate-smoothlyAppear">
                <ArticleCard article={article} />
              </div>
            )
          ))}
        </div>

      </div>
    </>
  );
}