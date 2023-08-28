import Image from "next/image";
export default function FeaturedCreations(props) {
  return (
    <section className="row">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.creations.map((creation) => (
          <div className="col">
            <div className="card">
              <Image
                src={`/blog-images/${creation.image}`}
                className="card-img-top img-fluid"
                alt="..."
                width={1280}
                height={720}
              />
              <div className="card-body">
                <h5 className="card-title">{creation.title}</h5>
                <p className="card-text">{creation.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
