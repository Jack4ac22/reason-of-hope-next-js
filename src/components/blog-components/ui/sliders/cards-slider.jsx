'use client';
import { useState, useEffect } from "react";
import { randomArticlesFromArray } from "@/utils/blog/general-functions";
import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaDotCircle } from "react-icons/fa";
import { Suspense } from 'react'
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";


// TODO: fix layout issue with the width on md screens

/**
 * Renders a card slider component.
 *
 * @component
 * @param {Object[]} articles - The array of articles to display in the slider.
 * @returns {JSX.Element} The card slider component.
 */
export default function CardSlider({ articles, showNav = true }) {
  const unique_key_prefix = articles.map((article) => article?.title?.slice(2, 3)).join("-");
  const slicedArticles = articles?.length > 5 ? randomArticlesFromArray(articles, 5) : articles;

  function handleNextSlide() {
    if (articles?.length > 1) {
      setCurrentIndex((currentIndex + 1) % slicedArticles.length);
    }
  }

  function handlePrevSlide() {
    if (articles?.length > 1) {
      setCurrentIndex((currentIndex - 1 + slicedArticles.length) % slicedArticles.length);
    }
  }

  let [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slicedArticles.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [currentIndex, slicedArticles.length]);


  return (
    <div className="flex-col w-72">
      {/* slider container */}
      <div className="w-72  m-2 relative" aria-live="polite">

        {/* Slider navigation */}
        <div className="flex justify-between items-center uni-text-color text-2xl">
          <button
            className="absolute top-48 right-1 text-2xl hover:animate-pulse hover:text-darkAccent-500 z-10"
            onClick={handlePrevSlide}
            aria-label="Next slide"
          >
            <FaArrowAltCircleRight />
          </button>
          <button
            className="absolute top-48 left-1 text-2xl hover:animate-pulse hover:text-darkAccent-500 z-10"
            onClick={handleNextSlide}
            aria-label="Previous slide"
          >
            <FaArrowAltCircleLeft />
          </button>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center -z-50">
          {slicedArticles.map((article, index) => (
            index === currentIndex && (
              <div key={`${unique_key_prefix}-${index}-${article?.title}`} className="animate-smoothlyAppear">
                <Suspense fallback={<CardsListSkeleton />} >
                  <ArticleCard article={article} simple={false} />
                </Suspense>
              </div>
            )
          ))}
        </div>

      </div>
      {/* lower navigation container */}
      {!showNav || (<div className="mx-auto w-full z-50">
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
      </div>)}

    </div>
  );
}