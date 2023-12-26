import { useState } from "react";
import OverlayComponent from "../components/general-compenents/toast/overlay-component";
import OverlayToast from "../components/general-compenents/toast/overlay-toast";
export default function OverlayPage() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [href, setHref] = useState("");
  function handlieLinkClick(e) {
    e.preventDefault();
    setLinkClicked(true);
    setHref(e.target.href);
  }
  function onCloseButtonClick() {
    setLinkClicked(false);
  }
  return (
    <>
      <div id="overlay-item">
        <a
          href="https://biblia.com/books/ar-vandyke/mk16.17"
          onClick={handlieLinkClick}
        >
          link
        </a>
        {linkClicked && (
          <OverlayToast url={href} onClose={onCloseButtonClick} />
        )}
      </div>
    </>
  );
}

// over laying component on top of the page... usestate to show hid, another useState to set the url, a third usestate to the loading state another usestate for the returned data from the fetch request via fetchUrl.js. then useEffect to set the loading to false when the returned data state is set. then a conditional to show the loading state or the returned data state. then a button to close the overlay and a button to open the url in a new tab.
//  check the response type and see how it will be displayed in overlay... innerhtml or iframe or something else.
