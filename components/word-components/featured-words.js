import Image from "next/image";
export default function FeaturedWords(props) {
  return (
    <section className="row">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.words.map((word) => (
          <div className="col">
            <div className="card">
              <Image
                src={`/blogImages/${word.image}`}
                className="card-img-top img-fluid"
                alt="..."
                width={1280}
                height={720}
              />
              <div className="card-body">
                <h5 className="card-title">{word.title}</h5>
                <p className="card-text">{word.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
