import { FaSpotify, FaPodcast, FaYoutube } from "react-icons/fa6";
import { SiGooglepodcasts, SiHearthisdotat } from "react-icons/si";
import Link from "next/link";

export default function AudioLinks({ article }) {
  let filteredAudio = []
  filteredAudio = article?.audio?.filter((audio) => {
    const [title, link] = Object.entries(audio)[0];
    return link !== '';
  });
  if (!filteredAudio) return null;
  article.spotify && filteredAudio.unshift({ 'spotify': article.spotify });
  article.youtube && filteredAudio.unshift({ 'youtube': article.youtube });


  if (filteredAudio.length === 0) return null;


  const audioLinks = filteredAudio.map((audio) => {
    const [title, link] = Object.entries(audio)[0];
    return { title, link };
  });



  function AudioLinkIcon({ title, link, children }) {
    return (
      <div className="relative group w-min h-min pt-5 group-hover:shadow-xl flex flex-col items-center my-2 rounded-full p-1 duration-200">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
        <span className="absolute p-0 top-0 bg-lightShade-700 text-center bg-opacity-70 rounded-xl text-mainBrand-500 font-bold group-hover:p-1">
          <span className="top-0-0 sr-only group-hover:not-sr-only">{title}</span>
        </span>
      </div>
    );
  }

  return (
    <>
      <div className='flex-col my-3'>
        <p className="text-lg font-bold">يُمكنكم الإستماع إلى هذا المنشور من خلال المنصات التالية: </p>
        <div className="flex flex-wrap justify-center content-center items-center">
          {audioLinks.map((audio, index) => {
            const { title, link } = audio;
            if (title === 'spotify') {
              return (
                <div key={`${title}-${link}`}>
                  <AudioLinkIcon title="Spotify" link={link}>
                    <FaSpotify className="text-4xl mx-2" />
                  </AudioLinkIcon>
                </div>
              )
            }
            if (title == 'applePodcasts') {
              return (<>
                <AudioLinkIcon title="Apple Podcasts" link={link} key={title + index}>
                  <FaPodcast className="text-4xl mx-2" />
                </AudioLinkIcon>
              </>)
            }
            if (title == "googlePodcasts") {
              return (<>
                <AudioLinkIcon title="Google Podcasts" link={link} key={title + index}>
                  <SiGooglepodcasts className="text-4xl mx-2" />
                </AudioLinkIcon>
              </>)
            }
            if (title == "hearthisAt") {
              return (<>
                <AudioLinkIcon title="Hearthis.at" link={link} key={title + index}>
                  <SiHearthisdotat className="text-4xl mx-2" />
                </AudioLinkIcon>
              </>)
            }
            if (title == 'anchorLink') {
              return (<>
                <AudioLinkIcon title="Anchor" link={link} key={title + index}>
                  <FaSpotify className="text-4xl mx-2 text-gray-700" />
                </AudioLinkIcon>
              </>)
            }
            if (title == 'youtube') {
              return (<>
                <AudioLinkIcon title="YouTube" link={link} key={title + index}>
                  <FaYoutube className="text-4xl mx-2" />
                </AudioLinkIcon>
              </>)
            }
          })}
        </div>
      </div>
    </>
  );
}