import Image from "next/image";
import Link from "next/link";
export default function CarouselItemCard(props) {
  const articles = props.articles;
  return (
    <>
      {articles.map((article, index) => {
        return (
          <>
            <div className={`carousel-item ${index == 0 ? "active" : ""} `}>
              <div class="card text-bg-dark">
                <Image
                  className="card-img"
                  src={`/blog-images/${article.coverImage}`}
                  alt={article.title}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
                <Link href={`/creation/${article.slug}`}>
                  <div class="card-img-overlay">
                    <div class="container text-center">
                      <div class="row align-items-center">
                        <div class="col">
                          <h5 class="card-title m-5 text-white bg-dark text-center">
                            {article.title}
                          </h5>
                          <p class="card-text mt-3 text-white bg-dark text-center">
                            {article.description}
                          </p>
                          <Link
                            href={`/creation/${article.slug}`}
                            className="btn btn-sm btn-warning"
                          >
                            اقرأ هذا المنشور
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
