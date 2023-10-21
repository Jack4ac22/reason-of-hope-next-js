import CarouselItems from "./carousel-item";
export default function AutoplayingCarousel(props) {
  const articles = props.articles;
  const id = props.id;

  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* <div className="carousel-item active">
            <img src="/blog-images/032.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/blog-images/003-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/blog-images/130.jpg" className="d-block w-100" alt="..." />
          </div> */}
          <CarouselItems articles={articles} />
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
