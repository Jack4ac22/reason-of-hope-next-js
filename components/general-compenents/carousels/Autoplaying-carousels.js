import CarouselItems from "./carousel-item";
import CarouselItemCard from "./carousel-item-card";
export default function AutoplayingCarousel(props) {
  const articles = props.articles;
  const id = props.id;
  const baseUrl = props.baseUrl;
  const isBook = props.isBook;
  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <CarouselItemCard
            articles={articles}
            baseUrl={baseUrl}
            isBook={isBook}
          />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}