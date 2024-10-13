import Image from 'next/image';
import ArticleDescription from '@/components/blog-components/cards/article-card/card-items/regular/article-description';

export default function RegularArticleBody({ article }) {
  return (
    <>
      {/* image when hover will zoom in */}
      <Image src={`/blog_images/${article.coverImage}`} alt={`صورة الغلاف لموضوع ${article.title}`} width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full object-fill' />
    </>
  );
}