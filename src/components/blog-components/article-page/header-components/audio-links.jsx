import Link from "next/link";

export default function AudioLinks({ article }) {
  if(article?.audio?.length === 0 & !article.spotify) return null;
  return (
    <>
      <div className='flex-col'>
        <h3 className="text-مل font-bold">يُمكنكم الإستماع إلى هذا المنشور من خلال المنصات التالية: </h3>
       {/* if spotify then display the link to spotify */}
       {/* if audio loop and display the links  */}
      </div>
    </>
  );
}