import React, { useEffect, useState } from "react";
const OverlayToast = ({ url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overlay-toast">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={onClose}>Close</button>
          <button onClick={() => window.open(url, "_blank")}>Visit URL</button>
          <iframe src={url} style={{ width: "80vw", height: "80vh" }}></iframe>
        </>
      )}
    </div>
  );
};

export default OverlayToast;
