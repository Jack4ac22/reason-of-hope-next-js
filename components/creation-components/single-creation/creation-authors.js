export default function CreationAuthors(props) {
  const { authors } = props;
  return (
    <>
    {/* check if the authors is an array before. */}
      {authors.map((author) => (
        <div key={author.name} className="badge text-bg-light">
          <a
            href={author.link ? author.link : "www.creation.com"}
            key={author.name}
            className="text-decoration-none btn"
          >
            <div className="card-body">
              <h5 className="card-title">{author.name}</h5>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
