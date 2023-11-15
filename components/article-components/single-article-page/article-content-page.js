import ArticleContentBody from "../../article-components/article-body/article-content-body";
import ArticleContentHeader from "./article-content-header";
import ArticleHeader from "../article-header/article-header";
import YouTube, { YouTubeProps } from "react-youtube";
import { Spotify } from "react-spotify-embed";
import YouTubeEmbed from "../../iframes/youtube-component";
export default function ArticleContentPageComponent(props) {
  const { article } = props;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  // TODO: centralise the youtube component, check the alternative, and centeralize the spotify component
  // TODO: add a check if there is fallacies, and related objections and add them to the article
  return (
    <>
      <ArticleHeader article={article} />
      <article>
        <ArticleContentHeader article={article} />
        <div className="container-md">
          <div className="row">
            {article.spotify && (
              <div className={`${article.youtube ? "col-md-5" : "col"} m-p-3`}>
                <Spotify wide link={article.spotify} />
              </div>
            )}
            {article.youtube && (
              <div className={`${article.youtube ? "col-md-7" : "col"} m-p-3`}>
                {/* <YouTubeEmbed video={article.youtube} /> */}
                <YouTube videoId={article.youtube} opts={opts} />
              </div>
            )}
          </div>
        </div>
        <ArticleContentBody article={article} />
      </article>
    </>
  );
}
