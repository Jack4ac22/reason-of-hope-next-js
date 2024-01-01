export default function CarouselItems(props) {
  const articles = props.articles;
  return (
    <>
      {articles.map((article, index) => {
        // console.log(index);
        return (
          <div className="container">
            <div className="row">
              <div
                className="col"
                style={{
                  paddingTop: `${(128 / 720) * 100}%`,
                  position: "relative",
                }}
              >
                <div className="slider-content">
                  <div
                    key={article.title}
                    className={`carousel-item ${index == 0 ? "active" : ""} `}
                  >
                    <img
                      src={`/blog_images/${article.coverImage}`}
                      className="img-fluid"
                      alt={article.title}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
         {
          /* .img-fluid {
          height: 100%;
          width: auto;
        } */
        }
      `}</style>
      `
    </>
  );
}
