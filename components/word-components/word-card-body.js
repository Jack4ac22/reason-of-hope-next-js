export default function wordCardBody(props) {
  const { word } = props;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{word.title}</h5>
        <p className="card-text">{word.description}</p>

        <div className=" d-grid gap-2 col-6 mx-auto">
          <a href={`/words/${word.slug}`} className="btn btn-primary">
            اقرأ أكثر
          </a>
        </div>
      </div>
    </>
  );
}
