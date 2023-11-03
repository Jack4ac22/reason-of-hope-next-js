import ArticleCardFooter from "./article-card-footer";
import ArticleCardBody from "./article-card-body";
import Link from "next/link";
import Image from "next/image";
export default function ArticleCard(props) {
  const article = props.article;
  const baseUrl = props.baseUrl;
  // console.log(article);
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <Link href={`/${baseUrl}/${article.slug}`}>
            <Image
              src={`/blog-images/${article.coverImage}`}
              className="card-img-top img-fluid"
              alt={`Cover Image for: ${article.slug}`}
              width={860}
              height={360}
              loading="lazy"
            />
          </Link>
          <ArticleCardBody article={article} baseUrl={baseUrl} />
          <ArticleCardFooter article={article} baseUrl={baseUrl} />
        </div>
      </div>
    </>
  );
}
