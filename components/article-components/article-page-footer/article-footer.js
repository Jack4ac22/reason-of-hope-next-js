import Link from "next/link";
import { replaceDashed } from "../../../utilities/general-functions";
export default function ArticlePageFooter(props) {
  const article = props.article;

  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="list-group">
              <p
                className="list-group-item list-group-item-action active text-center h5"
                aria-current="true"
              >
                الفئات
              </p>
              {article.categories &&
                article.categories.length > 0 &&
                article.categories.map((category) => {
                  return (
                    <Link
                      href={`/categories/${category}`}
                      className="list-group-item list-group-item-action btn btn-primary text-center"
                      key={category}
                    >
                      {replaceDashed(category)}
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="list-group">
              <p
                className="list-group-item list-group-item-action active text-center h5"
                aria-current="true"
              >
                الوسوم
              </p>
              {article.tags &&
                article.tags.length > 0 &&
                article.tags.map((tag) => {
                  return (
                    <Link
                      href={`/tags/${tag}`}
                      className="list-group-item list-group-item-action btn btn-primary text-center"
                      key={tag}
                    >
                      {replaceDashed(tag)}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}