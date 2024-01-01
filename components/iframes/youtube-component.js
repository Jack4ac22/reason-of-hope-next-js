import React, { useState, useEffect } from "react";

function YouTubeEmbed({ video }) {
  const [iframeWidth, setIframeWidth] = useState("560");
  const [iframeHeight, setIframeHeight] = useState("315");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 560) {
        setIframeWidth(0.7 * 560);
        setIframeHeight(0.7 * 315);
      } else if (screenWidth < 960) {
        setIframeWidth((0.65 * screenWidth).toString());
        setIframeHeight(((screenWidth / 560) * 315).toString());
      } else {
        setIframeWidth(720);
        setIframeHeight(((960 / 560) * 315).toString());
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${video}`;

  const iframeStyle = {
    width: `${iframeWidth}px`,
    height: `${iframeHeight}px`,
    border: "none", // Remove border
  };

  return (
    <div className="youtube-embed col rounded">
      <iframe
        src={embedUrl}
        allowFullScreen
        title="YouTube Video"
        style={iframeStyle}
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
