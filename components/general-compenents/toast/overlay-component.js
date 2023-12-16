import { useState } from "react";

export default function OverlayComponent(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const recievedurl = props.url;

  return (
    <>
      <div>
        {(showOverlay && isLoading) || (
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}
