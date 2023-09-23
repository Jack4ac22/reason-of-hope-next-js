import React, { useState, useEffect } from "react";

function YouTubeEmbed({ video }) {
  const [iframeWidth, setIframeWidth] = useState("560");
  const [iframeHeight, setIframeHeight] = useState("315");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 560) {
        setIframeWidth("560");
        setIframeHeight("315");
      } else {
        setIframeWidth(screenWidth.toString());
        setIframeHeight(((screenWidth / 560) * 315).toString());
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
    <div className="youtube-embed">
      <iframe
        src={embedUrl}
        allowFullScreen
        title="YouTube Video"
        style={iframeStyle} // Apply the styles using the style attribute
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
