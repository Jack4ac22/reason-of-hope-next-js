export default function ModalImage(props) {
  const { image } = props;
  const isFullWidth = image.alt.toLowerCase().includes("full");
  // const isFloatRight = image.alt.toLowerCase().includes("right");
  // const isFloatLeft = image.alt.toLowerCase().includes("left");
  // const isFloatCenter = image.alt.toLowerCase().includes("center");
  const identifier = image.src.replace(/\.[^/.]+$/, "");
  return (
    <>
      {/* <div className="col-md-6 col-lg-4"> */}
      <button
        type="button"
        className={`btn btn-link ` + (isFullWidth ? "w-100" : "col-lg-4 colf-md-12 float-end")}
        data-bs-toggle="modal"
        data-bs-target={`#modal${identifier}`}
      >
        {/* <figure calssName="figure"> */}
        <img
          src={`/blog-images/${image.src}`}
          className={`col-md-6  img-fluid rounded float-end ${
            isFullWidth ? "w-100" : ""
          } `}
        />
        {/* <figcaption calssName="figure-caption">{image.alt}</figcaption> */}
        {/* </figure> */}
      </button>
      {/* </div> */}
      <div
        className="modal fade"
        id={`modal${identifier}`}
        tabindex="-1"
        aria-labelledby={`modal${identifier}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modal${identifier}Label`}>
                {image.alt}
              </h5>
            </div>
            <div className="modal-body">
              <figure calssName="figure">
                <img
                  src={`/blog-images/${image.src}`}
                  className="img-fluid w-100"
                />
                <figcaption calssName="figure-caption">{image.alt}</figcaption>
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
