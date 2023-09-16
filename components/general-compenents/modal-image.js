import Image from "next/image";
export default function ModalImage(props) {
  const { image } = props;
  // adjust the image alt to remove the words "full" or "large" or "small"
  image.alt = image.alt.replace(/full|large|small/gi, "");
  const isFullWidth = image.alt.toLowerCase().includes("full");
  const isLargeWidth = image.alt.toLowerCase().includes("large");
  const isSmallidth = image.alt.toLowerCase().includes("small");
  // const isFloatRight = image.alt.toLowerCase().includes("right");
  // const isFloatLeft = image.alt.toLowerCase().includes("left");
  // const isFloatCenter = image.alt.toLowerCase().includes("center");
  const identifier = image.src.replace(/\.[^/.]+$/, "");
  return (
    <>
      <div
        className={`container-fluid ${isFullWidth ? "w-100" : ""}
        ${isLargeWidth ? "w-50" : ""}
      ${!isFullWidth && !isLargeWidth ? "col-lg-4 col-md-12 float-end " : ""}
      }`}
      >
        <button
          type="button"
          className={`btn btn-link`}
          data-bs-toggle="modal"
          data-bs-target={`#modal${identifier}`}
        >
          {/* <figure calssName="figure"> */}
          
          <Image src={`/blog-images/${image.src}`} alt={image.alt} width={400} height={250} className="img-fluid"/>
          {/* <img
            src={`/blog-images/${image.src}`}
            className={"w-100 img-fluid"}
          /> */}
          
          {/* <figcaption calssName="figure-caption">{image.alt}</figcaption> */}
          {/* </figure> */}
        </button>
      </div>
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

                <Image src={`/blog-images/${image.src}`} alt={image.alt} width={900} height={600} className="img-fluid"/>
                
{/*                 
                <img
                  src={`/blog-images/${image.src}`}
                  className="img-fluid w-100"
                /> */}
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
// TODO: check if Image from next/image is better than img tag.
