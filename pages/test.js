import { useState } from "react";
import OverlayToast from "../components/general-compenents/toast/overlay-toast";

export default function TestPage() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [url, setUrl] = useState("");
function handleClick(e) {
    e.preventDefault();
    setShowOverlay(true);
    setUrl(e.target.href);
  }

  return (
    <>
      <a href="https://www.bible.com/en-GB/bible/101/DEU.2.9" onClick={handleClick}>Show Overlay</a>

      {showOverlay && (
        <OverlayToast
          url={url}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </>
  );
}
