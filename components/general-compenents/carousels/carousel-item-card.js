import Image from "next/image";
import Link from "next/link";
export default function CarouselItemCard(props) {
  const articles = props.articles;
  const baseUrl = props.baseUrl;
  const isBook = props.isBook;
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
              //TODO:  ratio="16/9"
            >
              <div className="card text-bg-dark">
                <Image
                  className="card-img"
                  src={`/blog_images/${article.coverImage}`}
                  alt={article.title}
                  width={300}
                  height={300}
                  style={{ objectFit: isBook ? "scale-down" : "cover" }}
                />
                <div className="card-img-overlay">
                  <div className="container text-center ">
                    <div
                      className={` ${
                        isBook
                          ? "row aligne-items-end"
                          : "row align-items-center"
                      } `}
                    >
                      <div className="col align-self-end">
                        <Link
                          href={`${baseUrl}/${article.slug}`}
                          className={`${
                            isBook
                              ? "btn btn-sm btn-primary"
                              : "btn btn-sm btn-info"
                          }`}
                        >
                          {isBook ? "احصل على هذا الكتاب" : "اقرأ هذا المنشور"}
                        </Link>

                        {isBook || (
                          <h5 className="card-title m-5 text-white bg-dark text-center">
                            {article.title}
                          </h5>
                        )}
                        {isBook || (
                          <p className="card-text mt-3 text-white bg-dark text-center d-none d-sm-block">
                            {article.description &&
                            article.description.split(" ").length > 20
                              ? short_description + "..."
                              : article.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
