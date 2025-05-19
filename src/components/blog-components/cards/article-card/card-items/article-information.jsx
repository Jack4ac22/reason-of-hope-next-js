import CreationLink from "@/components/blog-components/article-page/header-components/creation-link";
import Link from "next/link";
import { getAudioLinksFromArticle } from "@/utils/blog/general-functions";

export default function ArticleInformation({ article }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  function readableDate(article) {
    try {
      return new Date(article.date).toLocaleDateString('ar-SY', options)
    } catch (error) {
      console.log(error)
    }
  }


  function PersonInfoLink({ author }) {
    return (
      <Link href={author.link} aria-label={`Author: ${author.name}`} className="info-link-button information-card-text">{author.name}</Link>
    )
  }

  const audioLinks = getAudioLinksFromArticle(article);

  return (
    <>
      <div className="p-4 flex-col items-start justify-center z-50" role="banner">

        {/* title */}
        <section className="mb-1 text-center w-full">
          <h3 className="text-lg font-bold text-center text-mainBrand-600 dark:text-mainBrand-200">{article.title}</h3>
        </section>

        {/* publication date */}
        <section className="mb-1 information-card-text w-full text-left">
          <p>
            <span>تاريخ النشر: </span>
            <span>{readableDate(article)}</span>
          </p>
        </section>

        {/* authors */}
        {/* {article.authors && article.authors.length > 0 &&
          (<section className="mb-1">
            <p className="text-right">
              <span> {(article.authors.length == 1) ? 'المؤَلِّف: ' : 'المؤلِّفون: '
              } </span>
              {article.authors.map((author, index) => (
                <span key={author.name + index}>
                  <PersonInfoLink author={author} />
                  <span>{index < article.authors.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))}
            </p>
          </section>
          )
        } */}
        {/*translators */}
        {/* {
          article.translators && article.translators.length > 0 &&
          (<section className="mb-1 ">
            <p className="text-right">
              <span> {(article.translators.length == 1) ? 'المترجم: ' : 'المترجمون: '
              } </span>
              {article.translators.map((translator, index) => (
                <span key={translator.name + index}>
                  <PersonInfoLink author={translator} />
                  <span>{index < article.translators.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))}
            </p>
          </section>
          )
        } */}

        {/* full description */}
        {article.description &&
          (<section className="m-1">
            <p className="text-right">
              <span>الوصف: </span>
              <span className="information-card-text">{article.description}</span>
            </p>
          </section>)
        }

        {/* creation link */}
        {article?.creationLink && (
          <CreationLink article={article} />
        )}

        {/* multimedia Links */}
        {/* {audioLinks && audioLinks.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>روابط الوسائط: </span>
              <span className="block text-left" dir="ltr" >
                {audioLinks.map((link, index) => (
                  <span key={link + index}>
                    <Link href={link?.link || '#'} aria-label="Download Link" className="info-link-button information-card-text">{link.title}</Link>
                    <span>{index < article.resources.length - 1 ? ' - ' : '.'}</span>
                  </span>
                ))
                }
              </span>
            </p>
          </section>)
        } */}

        {/* published items */}

        {/* downloadable */}
        {/* {article.resources && article.resources.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>الملفات: </span>
              <span className="block text-left" dir="ltr">
                {article.resources.map((link, index) => (
                  <span key={link + index}>
                    <Link href={link?.link || '#'} aria-label="Download Link" className="info-link-button information-card-text">{link.title}</Link>
                    <span>{index < article.resources.length - 1 ? ' - ' : '.'}</span>
                  </span>
                ))
                }
              </span>
            </p>
          </section>)
        } */}

        {/* categories */}
        {/* {article.categories && article.categories.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>{article.categories.length == 1 ? "القسم: " : "الأقسام: "}</span>
              {article.categories.map((category, index) => (
                <span key={category + index}>
                  <Link href={`/categories/${category}`} aria-label={`Category: ${category.replace(/-/g, ' ')}`} className="info-link-button information-card-text">{category.replace(/-/g, ' ')}</Link>
                  <span>{index < article.categories.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))
              }
            </p>
          </section>)
        } */}

        {/* tags */}
        {/* {article.tags && article.tags.length > 0 &&
          (<section className="mb-1 text-right">
            <p className="">
              <span>الوسوم: </span>
              {article.tags.map((tag, index) => (
                <span key={tag + index}>
                  <Link href={`/tags/${tag}`} className="info-link-button information-card-text">{tag.replace(/-/g, ' ')}</Link>
                  <span>{index < article.tags.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))
              }
            </p>
          </section>)} */}

      </div>
    </>
  );
}