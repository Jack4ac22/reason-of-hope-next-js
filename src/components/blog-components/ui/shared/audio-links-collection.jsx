import { FaSpotify, FaPodcast, FaYoutube } from "react-icons/fa6";
import { SiAudiomack, SiGooglepodcasts, SiHearthisdotat } from "react-icons/si";

import AudioLinkIcon from "@/components/blog-components/ui/shared/audio-link-icon";
import { getAudioLinksFromArticle } from "@/utils/blog/general-functions";

export default function AudioLinksCollection({ article }, size = '4xl', hoverEffect = true) {

  const audioLinks = getAudioLinksFromArticle(article);
  return (
    <>
      {audioLinks.map((audio, index) => {
        const { title, link } = audio;
        if (title === 'spotify') {
          return (
            <div key={`${title}-${link}`}>
              <AudioLinkIcon hoverEffect={hoverEffect} title="Spotify" link={link}>
                <FaSpotify className={`text-${size} mx-2`} />
              </AudioLinkIcon>
            </div>
          )
        }
        if (title == 'applePodcasts') {
          return (<AudioLinkIcon hoverEffect={hoverEffect} title="Apple Podcasts" link={link} key={title + index}>
            <FaPodcast className={`text-${size} mx-2`} />
          </AudioLinkIcon>)
        }
        if (title == "googlePodcasts") {
          return (<AudioLinkIcon hoverEffect={hoverEffect} title="Google Podcasts" link={link} key={title + index}>
            <SiGooglepodcasts className={`text-${size} mx-2`} />
          </AudioLinkIcon>)
        }
        if (title == "hearthisAt") {
          return (<AudioLinkIcon hoverEffect={hoverEffect} title="Hearthis.at" link={link} key={title + index}>
            <SiHearthisdotat className={`text-${size} mx-2`} />
          </AudioLinkIcon>)
        }
        if (title == 'anchorLink') {
          return (<AudioLinkIcon hoverEffect={hoverEffect} title="Anchor" link={link} key={title + index}>
            <SiAudiomack className={`text-${size} mx-2`} />
          </AudioLinkIcon>)
        }
        if (title == 'youtube') {
          return (<AudioLinkIcon hoverEffect={hoverEffect} title="YouTube" link={link} key={title + index}>
            <FaYoutube className={`text-${size} mx-2`} />
          </AudioLinkIcon>)
        }
      })}
    </>
  )
} 