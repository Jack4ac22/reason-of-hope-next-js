import ArticleAuthors from "./article-authors";
import ExternalLink from "./creation-article-link";
import Image from "next/image";
import ShareIt from "../../ui/share-it";

export default function CreationContentHeader(props) {
  const { article } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{article.title}</h1>
            <ShareIt
              title={article.title}
              url={`https://reasonofhope.com/article/${article.slug}`}
              tags={article.tags}
              description={article.description}
            />
            <ArticleAuthors authors={article.authors} />
            <ExternalLink article={article} />
          </div>

          <Image
            src={`/blog-images/${article.coverImage}`}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid d-none d-lg-block cover-image-header"
            alt={`Cover Image for: ${article.slug}`}
            width={430}
            height={180}
            loading="lazy"
            object-fit="cover"
          />
        </div>
      </header>
      <style jsx>{`
        .cover-image-header {
          border-radius: 10px;
          height: 200px;
          width: auto;
        }
      `}</style>
    </>
  );
}
// TODO: restyle the header of the article to make it more responsive and make the cover image with a max height of 200px or 350px max so it will not cause troubles. and redesigne the authors and the add the article link of the articles.
