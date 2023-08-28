import CreationContentBody from "./creation-content-body";
import CreationContentHeader from "./creation-content-header";
import YouTube, { YouTubeProps } from "react-youtube";
import { Spotify } from "react-spotify-embed";
export default function CreationContentPageComponent(props) {
  const { creation } = props;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  return (
    <>
      <article>
        <CreationContentHeader creation={creation} />
        <div className="container-md">
          <div className="row">
            {creation.spotify && (
              <div className={`${creation.youtube ? "col-md-5" : "col"} m-p-3`}>
                <Spotify wide link={creation.spotify} />
              </div>
            )}
            {creation.youtube && (
              <div className={`${creation.youtube ? "col-md-7" : "col"} m-p-3`}>
                <YouTube videoId={creation.youtube} opts={opts} />
              </div>
            )}
          </div>
        </div>

        <CreationContentBody creation={creation} />
      </article>
    </>
  );
}
