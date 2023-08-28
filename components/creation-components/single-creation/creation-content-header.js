import Image from "next/image";
import CreationAuthors from "./creation-authors";
export default function CreationContentHeader(props) {
  const { creation } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{creation.title}</h1>
            <CreationAuthors authors={creation.authors} />
          </div>
          <Image
            src={`/blog-images/${creation.coverImage}`}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            alt={`Cover Image for: ${creation.slug}`}
            width={430}
            height={180}
            loading="lazy"
          />
        </div>
      </header>
    </>
  );
}
