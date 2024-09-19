import { FaSpotify, FaPodcast, FaYoutube } from "react-icons/fa6";
import { SiGooglepodcasts, SiHearthisdotat } from "react-icons/si";


import { filterByKeyValue } from "@/utils/blog/general-functions";


export default function AudioLinks({ article }) {
  if (article?.audio?.length === 0) return null;
  const spotify = filterByKeyValue(article?.audio, 'spotify');
  const applePodcasts = filterByKeyValue(article?.audio, "applePodcasts")
  const googlePodcasts = filterByKeyValue(article?.audio, "googlePodcasts")
  const hearthisAt = filterByKeyValue(article?.audio, "hearthisAt")
  const anchorLink = filterByKeyValue(article?.audio, "anchorLink")
  const youtube = filterByKeyValue(article?.audio, 'youtube');
  return (
    <>
      <div className='flex-col my-3'>
        <p className="text-lg font-bold">يُمكنكم الإستماع إلى هذا المنشور من خلال المنصات التالية: </p>
        {/* if spotify then display the link to spotify */}
        {/* {spotify ?? (<div className='relativ group w-8 border-2 flex-col text-center items-center content-center justify-center mx-auto'>
          <span className="text-6xl"><FaSpotify /></span>
          <span className="p-2 m-2 text-lg font-bold absolute  z-20 text-red-500">Spotify</span>
        </div>)} */}

        {/* if audio loop and display the links  */}
      </div>
    </>
  );
}