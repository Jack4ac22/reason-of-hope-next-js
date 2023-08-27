import Link from "next/link";

export default function WordCardFooter(props) {
  const { word } = props;
  return (
    <div className="card-footer">
      {/* check if there are tags, diplay then with the Link tag. display the tag after removing the - from between the words. make the  */}
      {word.tags.length > 0 &&
        word.tags.map((tag) => {
          return (
            <Link
              key={`key${tag}-${word.title}`}
              type="button"
              className="btn btn-secondary btn-sm m-1"
              href={`/tags/${tag}`}
            >
              {tag.replace("-", " ")}
            </Link>
          );
        })}

      {word.categories.length > 0 &&
        word.categories.map((category) => {
          return (
            <Link
              key={`key${category}-${word.title}`}
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
