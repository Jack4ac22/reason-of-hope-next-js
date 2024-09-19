'use client';
import { filterByKeyValue } from "@/utils/blog/general-functions";
import { Spotify } from 'react-spotify-embed';
import { Suspense } from 'react';
import YouTube from "react-youtube";
import YoutubeSkelton from '../../skeltons/youtube-skelton';
export default function MediaPlayersHeader({ article }) {
  const spotify_link = article.spotify || filterByKeyValue(article?.audio, 'spotify');
  const youtube_link = article.youtube || filterByKeyValue(article?.audio, 'youtube');
  const opts = {
    width: "100%",
    height: "150",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  if (!youtube_link & !spotify_link) { return null };
  return (
    <sections >
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
      <div className='mb-4 text-xl text-center font-bold underline underline-offset-8'>
        <p className='sr-only md:not-sr-only'>
          {spotify_link && youtube_link && "استمع أو شاهد الآن"}
          {spotify_link && !youtube_link && "استمع الآن"}
          {!spotify_link && youtube_link && "شاهد الآن"}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        {spotify_link && (
          <div className='w-full md:w-1/2'>
            <Spotify wide link={spotify_link} />
          </div>
        )}
        {youtube_link && (
          <Suspense fallback={<YoutubeSkelton />}>
            <div className='w-full md:w-1/3'>
              <YouTube
                videoId={youtube_link}
                opts={opts}
              />
            </div>
          </Suspense>
        )}
      </div>
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
    </sections>
  )
}