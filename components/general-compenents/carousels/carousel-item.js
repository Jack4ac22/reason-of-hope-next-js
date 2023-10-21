export default function CarouselItems(props) {
  const articles = props.articles;
  return (
    <>
      {articles.map((article, index) => {
        console.log(index);
        return (
          <div key={article.title} className={`carousel-item ${(index == 0) ? "active" : ""}`}>
            <img
              src={`/blog-images/${article.coverImage}`}
              className="d-block w-100"
              alt={article.title}
            />
          </div>
        );
      })}
    </>
  );
}
