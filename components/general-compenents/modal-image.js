import Image from "next/image";
import Link from "next/link";
export default function ModalImage(props) {
  const { image } = props;
  // console.log(image);
  // adjust the image alt to remove the words "full" or "large" or "small"
  const isFullWidth = image.alt.toLowerCase().includes("full") || image.src.toLowerCase().includes("width=full");
  const isLargeWidth = image.alt.toLowerCase().includes("large") || image.src.toLowerCase().includes("width=large");
  const isSmallidth = image.alt.toLowerCase().includes("small") || image.src.toLowerCase().includes("width=small");
  const isFloatRight = image.src.toLowerCase().includes("position=right");
  const isFloatLeft = image.src.toLowerCase().includes("position=left");
  const isFloatCenter = image.src.toLowerCase().includes("position=center");
  if (image.alt) {
    image.alt = image.alt.replace(/full|large|small/gi, "");
  }
  // const isFloatRight = image.alt.toLowerCase().includes("right");
  // const isFloatLeft = image.alt.toLowerCase().includes("left");
  // const isFloatCenter = image.alt.toLowerCase().includes("center");
  const identifier = image.src.replace(/\.[^/.]+$/, "");

  return (
    <>
      <div
        className={`container-fluid ${isFullWidth ? "w-100" : ""}
        ${isLargeWidth ? "w-50" : ""}
      ${!isFullWidth && !isLargeWidth ? "col-lg-4 col-md-12 " : ""}
      ${isFloatRight ? "float-end" : ""}
      ${isFloatLeft ? "float-start" : ""}
      ${isFloatCenter ? "mx-auto d-block" : ""}
      ${!isFloatCenter && !isFloatLeft && !isFloatRight ? "float-end" : ""}
      `}
      >
        <button
          type="button"
          className={`btn btn-link`}
          data-bs-toggle="modal"
          data-bs-target={`#modal${identifier}`}
        >
          <figure className="figure">
            <Image
              src={`/blog_images/${image.src}`}
              alt={image.alt ? image.alt : "صورة"}
              width={isFullWidth ? 800 : 400}
              height={isFullWidth ? 500 : 250}
              className="img-fluid"
              style={{ objectFit: "contain" }}
            />
            {/* <img
            src={`/blog_images/${image.src}`}
            className={"w-100 img-fluid"}
          /> */}

            <figcaption className="figure-caption text-break">
              {image.alt ? image.alt : ""}
            </figcaption>
          </figure>
        </button>
      </div>
      <div
        className="modal fade"
        id={`modal${identifier}`}
        tabIndex="-1"
        aria-labelledby={`modal${identifier}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modal${identifier}Label`}>
                لمعاينة الصورة بحجمها الكامل
                <Link
                  href={`/blog_images/${image.src}`}
                  target="_blank"
                  className="btn"
                >
                  انقر هنا
                </Link>
                .
              </h5>
            </div>
            <div className="modal-body">
              <figure className="figure">
                <Image
                  src={`/blog_images/${image.src}`}
                  alt={image.alt}
                  width={900}
                  height={600}
                  className="img-fluid"
                />

                {/*                 
                <img
                  src={`/blog_images/${image.src}`}
                  className="img-fluid w-100"
                /> */}
                <figcaption className="figure-caption">{image.alt}</figcaption>
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
