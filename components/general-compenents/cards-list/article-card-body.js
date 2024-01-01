import Link from "next/link";
export default function ArticleCardBody(props) {
  const article = props.article;
  const baseUrl = props.baseUrl;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div className=" d-grid gap-2 col-6 mx-auto">
          <Link
            href={`${baseUrl}/${article.slug}`}
            className="btn btn-primary"
          >
            اقرأ أكثر
          </Link>
        </div>
      </div>
    </>
  );
}
