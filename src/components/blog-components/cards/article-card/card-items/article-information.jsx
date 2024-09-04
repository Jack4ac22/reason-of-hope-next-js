import Link from "next/link";


// TODO: enhanse the design of the information card
// TODO: add the icons of the media links
// TODO: add the icons for the published items
export default function ArticleInformation({ article }) {
  return (
    <>
      <div className="flex flex-col items-start justify-center overflow-y-scroll" aria-readonly>

        {/* title */}
        <div className="flex items-center justify-center" aria-label="title" aria-readonly>
          <h3 className="text-lg font-bold text-center text-mainBrand-600 dark:text-mainBrand-200">{article.title}</h3>
        </div>

        {/* publication date */}
        <div className="flex items-start justify-start">
          <p className="information-card-text">
            <span>تاريخ النشر: </span>
            <span>{new Date(article.date).toLocaleDateString('ar-SY')}</span>
          </p>
        </div>

        {/* authors */}
        {article.authors && article.authors.length > 0 &&
          (<div className="flex items-center justify-center">
            <p className="information-card-text">
              <span> {(article.authors.length == 1) ? 'المؤَلِّف: ' : 'المؤلِّفون: '
              } </span>
              {article.authors.map((author, index) => (
                <span key={author.name + index}>
                  <Link href={author.link} aria-label={`Author: ${author.name}`}>{author.name}{index < article.authors.length - 1 ? ' - ' : '.'}</Link>
                </span>
              ))}
            </p>
          </div>)
        }

        {/* categories */}
        {article.categories && article.categories.length > 0 &&
          (<div className="flex items-center justify-center">
            <p className="information-card-text">
              <span>{article.categories.length == 1 ? "القسم: " : "الأقسام: "}</span>
              {article.categories.map((category, index) => (
                <span key={category + index}>
                  <Link href={`/categories/${category}`} aria-label={`Category: ${category.replace(/-/g, ' ')}`}>{category.replace(/-/g, ' ')}{index < article.categories.length - 1 ? ' - ' : '.'} </Link>
                </span>
              ))
              }
            </p>
          </div>)
        }

        {/* tags */}
        {article.tags && article.tags.length > 0 &&
          (<div className="flex items-center justify-center">
            <p className="information-card-text">
              <span>الوسوم: </span>
              {article.tags.map((tag, index) => (
                <span key={tag + index}>
                  <Link href={`/tags/${tag}`}>{tag}{index < article.tags.length - 1 ? ' - ' : '.'}</Link>
                </span>
              ))
              }
            </p>
          </div>)
        }

        {/* full description */}
        {article.description &&
          (<div className="flex items-center justify-center">
            <p className="information-card-text">
              <span>الوصف: </span>
              <span>{article.description}</span>
            </p>
          </div>)
        }


      </div>
    </>
  );
}