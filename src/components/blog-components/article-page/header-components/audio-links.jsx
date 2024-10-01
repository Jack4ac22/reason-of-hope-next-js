import AudioLinksCollection from "@/components/blog-components/ui/shared/audio-links-collection";
import { getAudioLinksFromArticle } from "@/utils/blog/general-functions";

export default function AudioLinks({ article }) {
  const audioLinks = getAudioLinksFromArticle(article);
  if (audioLinks.length === 0) return null;
  return (
    <>
      <div className='flex-col my-3'>
        <p className="text-lg font-bold">يُمكنكم الإستماع إلى هذا المنشور من خلال المنصات التالية: </p>
        <div className="flex flex-wrap justify-center content-center items-center">
          <AudioLinksCollection article={article} size='4xl' />
        </div>
      </div>
    </>
  );
}