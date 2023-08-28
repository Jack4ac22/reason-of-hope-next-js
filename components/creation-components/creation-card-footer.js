import Link from "next/link";

export default function creationCardFooter(props) {
  const { creation } = props;
  return (
    <div className="card-footer">
      {/* check if there are tags, diplay then with the Link tag. display the tag after removing the - from between the creations. make the  */}
      {creation.tags.length > 0 &&
        creation.tags.map((tag) => {
          return (
            <Link
              key={`key${tag}-${creation.title}`}
              type="button"
              className="btn btn-secondary btn-sm m-1"
              href={`/tags/${tag}`}
            >
              {tag.replace("-", " ")}
            </Link>
          );
        })}

      {creation.categories.length > 0 &&
        creation.categories.map((category) => {
          return (
            <Link
              key={`key${category}-${creation.title}`}
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
