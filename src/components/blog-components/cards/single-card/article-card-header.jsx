import Image from 'next/image';
import Link from "next/link";
export default function ArticleCardHeader({ article }) {
  return (
    <>
      {/* image container */}
      <div className="w-full h-full">
        <Link href={`/blog_images/${article.coverImage}`}>
          <Image src={`/blog_images/${article.coverImage}`} alt={`صورة الغلاف لموضوع ${article.title}`} width={0}
            height={0}
            sizes='100vw'
            className={`${!article.isBook ? "aspect-16/9 object-cover " : "rounded-b-xl max-h-96 object-fill "} w-full rounded-t-xl mb-2`} />
        </Link>
      </div>
    </>
  );
}