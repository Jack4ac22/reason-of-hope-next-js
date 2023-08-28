export default function CreationCardBody(props) {
  const { creation } = props;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{creation.title}</h5>
        <p className="card-text">{creation.description}</p>
        <div className=" d-grid gap-2 col-6 mx-auto">
          <a href={`/creation/${creation.slug}`} className="btn btn-primary">
            اقرأ أكثر
          </a>
        </div>
      </div>
    </>
  );
}
