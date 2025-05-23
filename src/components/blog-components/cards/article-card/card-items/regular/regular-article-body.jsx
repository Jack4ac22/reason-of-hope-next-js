import Image from 'next/image';
import ArticleDescription from '@/components/blog-components/cards/article-card/card-items/regular/article-description';

export default function RegularArticleBody({article}) {
  return (
    <>
      {/* image when hover will zoom in */}
      <Image src={`/blog_images/${article.coverImage}`} alt={`صورة الغلاف لموضوع ${article.title}`} width={0}
        height={0}
        sizes='100vw'
        className='aspect-16/9 object-cover w-full rounded-t-md mb-2' />
      {/* Card Body container */}
      <div className='flex-col items-center justify-center h-40 m-2'>
        {/* header including the title and the time */}
        <div>
          <h2 className='h-12 mbF-2 text-lg  text-center font-bold text-mainBrand-600 dark:text-mainBrand-100'>{article?.title?.length > 44 ? article?.title?.slice(0, 44) + "..." : article.title}</h2>
          <p className='text-xs text-left text-darkAccent-400 dark:text-white '>
            <span >تاريخ النشر: </span>
            <span>
              {new Date(article.date).toLocaleDateString('ar-SY')}
            </span>
          </p>
        </div>
        {/* the article description if exsist */}
        < ArticleDescription article={article} />
      </div>
    </>
  );
}