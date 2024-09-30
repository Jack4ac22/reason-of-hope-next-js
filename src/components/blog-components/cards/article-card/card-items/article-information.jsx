import CreationLink from "@/components/blog-components/article-page/header-components/creation-link";
import Link from "next/link";


// TODO: enhanse the design of the information card
// TODO: add the icons of the media links
// TODO: add the icons for the published items
export default function ArticleInformation({ article }) {

  function PersonInfoLink({ author }) {
    return (
      <Link href={author.link} aria-label={`Author: ${author.name}`} className="info-link-button">{author.name}</Link>
    )
  }
  function AudioLink({ audio }) {
    const [key, value] = Object.entries(audio)[0];
    return (
      <span key={key + value}>
        <Link href={value} aria-label={`Media Link: ${key}`} className="info-link-button">{key}</Link>
      </span>)
  }



  return (
    <>
      <div className="p-4 flex-col items-start justify-center" role="banner">

        {/* title */}
        <section className="mb-1 text-center w-full">
          <h3 className="text-lg font-bold text-center text-mainBrand-600 dark:text-mainBrand-200">{article.title}</h3>
        </section>

        {/* publication date */}
        <section className="mb-1 information-card-text w-full text-left">
          <p>
            <span>تاريخ النشر: </span>
            <span>{new Date(article.date).toLocaleDateString('ar-SY')}</span>
          </p>
        </section>

        {/* authors */}
        {article.authors && article.authors.length > 0 &&
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
        }
        {/*TODO: translators */}
        {
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
        }

        {/* full description */}
        {article.description &&
          (<section className="m-1">
            <p className="text-right">
              <span>الوصف: </span>
              <span className="information-card-text">{article.description}</span>
            </p>
          </section>)
        }

        {/* TODO: add the links to download, listen and watch */}

        {/* creation link */}
        {article?.creationLink && (<span className="info-link-button">
          <CreationLink article={article} />
        </span>)}

        {/* multimedia Links */}
        {article?.audio && article?.audio.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>روابط الوسائط: </span>
              <span className="block text-left" dir="ltr" >
                {article.youtube && article.youtube.trim() !== "" && (
                  <span><Link href={article.youtube} aria-label="Youtube Link" className="info-link-button">يوتيوب</Link></span>
                )}
                {article.audio.map((link, index) => (
                  <span key={Object.entries(link)[0][0] + Object.entries(link)[0][1]}>
                    <AudioLink audio={link} key={link + index} />
                    <span>{index < article.audio.length - 1 ? ' - ' : '.'}</span>
                  </span>
                ))
                }
              </span>
            </p>
          </section>)
        }

        {/* published items */}

        {/* downloadable */}
        {article.resources && article.resources.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>الملفات: </span>
              <span className="block text-left" dir="ltr">
                {article.resources.map((link, index) => (
                  <span key={link + index}>
                    <Link href={link.link} aria-label="Download Link" className="info-link-button">{link.title}</Link>
                    <span>{index < article.resources.length - 1 ? ' - ' : '.'}</span>
                  </span>
                ))
                }
              </span>
            </p>
          </section>)
        }

        {/* published */}

        {/* categories */}
        {article.categories && article.categories.length > 0 &&
          (<section className="mb-1 text-right">
            <p>
              <span>{article.categories.length == 1 ? "القسم: " : "الأقسام: "}</span>
              {article.categories.map((category, index) => (
                <span key={category + index}>
                  <Link href={`/categories/${category}`} aria-label={`Category: ${category.replace(/-/g, ' ')}`} className="info-link-button">{category.replace(/-/g, ' ')}</Link>
                  <span>{index < article.categories.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))
              }
            </p>
          </section>)
        }

        {/* tags */}
        {article.tags && article.tags.length > 0 &&
          (<section className="mb-1 text-right">
            <p className="">
              <span>الوسوم: </span>
              {article.tags.map((tag, index) => (
                <span key={tag + index}>
                  <Link href={`/tags/${tag}`} className="info-link-button">{tag.replace(/-/g, ' ')}</Link>
                  <span>{index < article.tags.length - 1 ? ' - ' : '.'}</span>
                </span>
              ))
              }
            </p>
          </section>)}

        {/* LINKS TO MWDIA */}

        {/* DOWNLOADING LINK */}
      </div>
    </>
  );
}