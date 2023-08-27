import Image from "next/image";
export default function CreationContentHeader(props) {
  const { creation } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{creation.title}</h1>
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
