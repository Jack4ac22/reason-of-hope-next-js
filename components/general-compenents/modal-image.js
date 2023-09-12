export default function ModalImage(props) {
  const { image } = props;
  return (
    <>
      {/* <div className="col-md-6 col-lg-4"> */}
      <button
        type="button"
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target={`#modal${image.src}`}
      >
        {/* <figure class="figure"> */}
        <img src={image.src} className="figure-img img-fluid rounded" />
        {/* <figcaption class="figure-caption">{image.alt}</figcaption> */}
        {/* </figure> */}
      </button>
      {/* </div> */}
      <div
        className="modal fade"
        id={`modal${image.src}`}
        tabindex="-1"
        aria-labelledby={`modal${image.src}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modal${image.src}Label`}>
                {image.alt}
              </h5>
            </div>
            <div className="modal-body">
              <figure class="figure">
                <img src={image.src} className="img-fluid w-100" />
                <figcaption class="figure-caption">{image.alt}</figcaption>
              </figure>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
