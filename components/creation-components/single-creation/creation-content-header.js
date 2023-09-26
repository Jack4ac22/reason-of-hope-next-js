import Image from "next/image";
import CreationAuthors from "./creation-authors";
import ShareIt from "../../ui/share-it";
import LinkToCreation from "./creation-article-link";
export default function CreationContentHeader(props) {
  const { creation } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{creation.title}</h1>
            <ShareIt
              title={creation.title}
              url={`https://reasonofhope.com/creation/${creation.slug}`}
              tags={creation.tags}
              description={creation.description}
            />
            <CreationAuthors authors={creation.authors} />
            <LinkToCreation creation={creation} />
          </div>

          <Image
            src={`/blog-images/${creation.coverImage}`}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid d-none d-lg-block cover-image-header"
            alt={`Cover Image for: ${creation.slug}`}
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
// TODO: restyle the header of the creation object to make it more responsive and make the cover image with a max height of 200px or 350px max so it will not cause troubles. and redesigne the authors and the add the creation link of the articles.

