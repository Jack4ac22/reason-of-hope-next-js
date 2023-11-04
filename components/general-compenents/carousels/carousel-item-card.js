import Image from "next/image";
import Link from "next/link";
export default function CarouselItemCard(props) {
  const articles = props.articles;
  const baseUrl = props.baseUrl;

  // TODO: check if the length of the string of the title is more than 6 words then the length of the description should be reduced to 10 words and concatinate it with "..." else the length of the description should be reduced to 20 words and concatinate it with "..."
  return (
    <>
      {articles.map((article, index) => {
        const randomIdentifier = Math.random().toString(36).substring(7);
        const key = randomIdentifier;
        const short_description = article.description
          ? article.description.substring(0, 100)
          : "";
        return (
          <>
            <div
              className={`carousel-item ${index == 0 ? "active" : ""} `}
              key={key}
            >
              <div className="card text-bg-dark">
                <Image
                  className="card-img"
                  src={`/blog-images/${article.coverImage}`}
                  alt={article.title}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
                {/* <Link href={`/creation/${article.slug}`}> */}
                <div className="card-img-overlay">
                  <div className="container text-center">
                    <div className="row align-items-center">
                      <div className="col">
                        <h5 className="card-title m-5 text-white bg-dark text-center">
                          {article.title}
                        </h5>
                        <p className="card-text mt-3 text-white bg-dark text-center">
                          {article.description &&
                          article.description.split(" ").length > 20
                            ? short_description + "..."
                            : article.description}
                        </p>
                        <Link
                          href={`/${baseUrl}/${article.slug}`}
                          className="btn btn-sm btn-warning"
                        >
                          اقرأ هذا المنشور
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
