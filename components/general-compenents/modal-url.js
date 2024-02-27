import Image from "next/image";
import Link from "next/link";
import UrlContentDisplay from "./url-cotent-display";

export default function ModalURL(props) {
  const { anchor } = props;
  console.log(props);
  // get the text from the url
  const text_url = props.children[0];
  // create a unique identifier with a timestamp
  const identifier = text_url + Date.now();

  return (
    <>
      <button
        type="button"
        className={`btn-link`}
        data-bs-toggle="modal"
        data-bs-target={`#modal${identifier}`}
      >
        {props.children[0]}
      </button>

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
                لزيارة الصفحة{" "}
                <Link href={props.href} target="_blank" className="btn">
                  انقر هنا
                </Link>
                .
              </h5>
            </div>
            <div className="modal-body">
              <UrlContentDisplay url={props.href} />
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
