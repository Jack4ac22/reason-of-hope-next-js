import Image from "next/image";
export default function WordContentHeader(props) {
  const { word } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{word.title}</h1>
          </div>
          <Image
            src={`/word-images/${word.coverImage}`}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            alt={`Cover Image for: ${word.slug}`}
            width={430}
            height={180}
            loading="lazy"
          />
        </div>
      </header>
    </>
  );
}
