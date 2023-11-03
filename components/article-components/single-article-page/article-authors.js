export default function ArticleAuthors(props) {
  const { authors } = props;
  return (
    <>
      {authors &&
        (authors.length > 1 ? (
          <h5>كُتَّاب المقال: </h5>
        ) : (
          <h5>كاتب المقال: </h5>
        ))}
      {authors &&
        authors.map((author) => (
          <div key={author.name} className="badge text-bg-light">
            <a
              href={author.link ? author.link : "#"}
              key={author.name}
              target="_blank"
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
