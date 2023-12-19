import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
export default function ArticleCardsList(props) {
  const articles = props.articles;
  const baseUrl = props.baseUrl;
  const numberToShow = props.numberToShow ? props.numberToShow : 8;

  const [showMore, setShowMore] = useState(false);
  const [numberOfArticlesToShow, setNumberOfArticlesToShow] =
    useState(numberToShow);

  function showMoreArticles() {
    setNumberOfArticlesToShow(numberOfArticlesToShow + 8);
  }

  function showAllArticles() {
    setNumberOfArticlesToShow(articles.length);
  }

  const [articlesToShow, setArticlesToShow] = useState([]);
  useEffect(() => {
    articles.length > numberOfArticlesToShow
      ? setShowMore(true)
      : setShowMore(false);
    articles.length > numberOfArticlesToShow
      ? setArticlesToShow(articles.slice(0, numberOfArticlesToShow))
      : setArticlesToShow(articles);
    setArticlesToShow(articles.slice(0, numberOfArticlesToShow));
  }, [numberOfArticlesToShow]);

  return (
    <>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {articlesToShow.map((article) => {
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              baseUrl={baseUrl}
            />
          );
        })}
      </section>
      {showMore && (
        //  centralize horizantally
        <div className="container">
          <div className="row my-3">
            <div className="col d-flex justify-content-center">
              <button
                className="btn btn-outline-primary"
                onClick={showMoreArticles}
              >
                عرض المزيد
              </button>
            </div>
            <div className="col d-flex justify-content-center">
              <button
                className="btn btn-outline-primary"
                onClick={showAllArticles}
              >
                عرض الكل{" "}
                <span class="badge text-bg-secondary">{`${articles.length}`}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// TODO: add show more button and make it work based on the number of article passed in the props, the default will be 8 articles. check if 8 is higher thatn the available articles.
