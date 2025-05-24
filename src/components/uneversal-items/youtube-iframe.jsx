import Link from "next/link";
import Iframe from "react-iframe";


export default function YoutubeIframe({ videoUrl, videoCaption, videoType }) {
  function extractYouTubeVideoKey(url, key) {
    try {
      const parsed = new URL(url);
      return parsed.searchParams.get(key); // returns the video ID
    } catch (err) {
      console.error('Invalid URL:', err.message);
      if (key === 'v') {
        return url
      }
      return null;
    }
  }
  const videoId = extractYouTubeVideoKey(videoUrl, 'v');
  const listId = extractYouTubeVideoKey(videoUrl, 'list');

  if (!videoId && !listId || videoType !== 'external' || !videoUrl) {
    return null;
  }

  return (
    <div className="my-4 print:hidden">
      <div className="w-full h-40 overflow-hidden">
        {videoId && !listId && (
          <Iframe
            url={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="100%"
            // id="myId"
            // className="myClassname"
            display="initial"
            position="relative"
          />
        )}

        {listId && (
          <Iframe
            url={`https://www.youtube.com/embed/videoseries?list=${listId}`}
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        )}
      </div>
      {videoCaption && (
        <p className="text-sm text-center mt-2">

          <Link href={
            `https://www.youtube.com/watch?v=${videoId}&list=${listId}`
          } target="_blank" className="section-link">  {`شاهد فيديو ${videoCaption} من خلال منصة يوتيوب`}</Link>
        </p>
      )
      }
    </div >
  );
}