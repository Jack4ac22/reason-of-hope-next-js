import React, { useState, useEffect } from "react";

const YouTubeEmbed = ({ video }) => {
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
    console.log("resize");
    console.log(iframeWidth);
    console.log(iframeHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoId = video.match(
    /(?:youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/
  )[3];

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

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
};

export default YouTubeEmbed;
