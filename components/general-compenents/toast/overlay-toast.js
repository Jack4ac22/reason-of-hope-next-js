import React, { useEffect, useState } from "react";
const OverlayToast = ({ url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overlay-toast">
      {isLoading ? (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <button onClick={onClose}>Close</button>
          <button onClick={() => window.open(url, "_blank")}>Visit URL</button>
          <div>
            <iframe
              src={url}
              style={{ width: "80vw", height: "80vh" }}
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default OverlayToast;
