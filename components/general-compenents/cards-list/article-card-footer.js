import Link from "next/link";

export default function ArticleCardFooter(props) {
  const article = props.article;
  return (
    <div className="card-footer">
      {article.tags.length > 0 &&
        article.tags.map((tag) => {
          return (
            <Link
              key={`key${tag}-${article.title}`}
              type="button"
              className="btn btn-secondary btn-sm m-1"
              href={`/tags/${tag}`}
            >
              {tag.replace("-", " ")}
            </Link>
          );
        })}

      {article.categories.length > 0 &&
        article.categories.map((category) => {
          return (
            <Link
              key={`key${category}-${article.title}`}
              type="button"
              className="btn btn-secondary btn-sm m-1"
              href={`/categories/${category}`}
            >
              {category.replace("-", " ")}
            </Link>
          );
        })}
    </div>
  );
}
