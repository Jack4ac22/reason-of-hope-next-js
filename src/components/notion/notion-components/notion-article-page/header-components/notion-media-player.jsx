'use client';
import { Spotify } from 'react-spotify-embed';
// import YouTube from "react-youtube";
import YoutubeListEmbeded from "@/components/notion/notion-components/notion-mapping/youtube-list";
export default function NotionMediaPlayersHeader({ article }) {
  const spotify_link = article?.spotify
  const youtube_link = article?.youtube
  if (!youtube_link & !spotify_link) { return null };
  return (
    <sections className="print:hidden">
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
      <div className='mb-4 text-xl text-center font-bold underline underline-offset-8'>
        <p className='sr-only md:not-sr-only'>
          {spotify_link && youtube_link && "استمع أو شاهد الآن"}
          {spotify_link && !youtube_link && "استمع الآن"}
          {!spotify_link && youtube_link && "شاهد الآن"}
        </p>
      </div>

      <div className={`flex flex-wrap justify-center content-center items-center ${spotify_link && youtube_link && 'md:justify-between'} md:place-conten`}>
        {spotify_link && (
          <div className='md:w-1/2 mb-2 md:mb-0'>
            <Spotify wide link={spotify_link} />
          </div>
        )}
        {youtube_link && (
          <div className='md:w-1/3 h-44'>
            <YoutubeListEmbeded videoUrl={youtube_link} videoType="external" />
          </div>
        )}
      </div>
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
    </sections>
  );
}