import Image from 'next/image';
import ShowInformation from '@/components/blog-components/ui/buttons/show-information';
import ArticleInformation from '@/components/blog-components/cards/article-card/card-items/article-information';
import ReadMoreButton from '@/components/blog-components/ui/buttons/read-more-button';

export default function RegularArticleCard({ article }) {
  if (!article.description && article.directory === 'objections') {
    if (article?.fallacies.length > 0) { article.description = "الأخطاء المنطقية التي ارتكبت في هذا الاعتراض هي: " + article.fallacies.map(fallacy => fallacy.split('-').join(' ')).join(', ') } else { "" }
  }
  function ArticleDescription({ description }) {
    const descriptionLength = 25;
    const isLongDescription = article.description.split(' ').length > descriptionLength
    if (!isLongDescription) {
      return (
        <div className="">
          <p className='text-md text-justify text-darkAccent-400 dark:text-white'>
            {description}
          </p>
        </div>
      )
    }
    return (
      <>
        <p className='my-2 text-md text-justify text-darkAccent-400 dark:text-white'>
          {description.split(' ').slice(0, descriptionLength).join(' ')}
          <span> ...</span>
        </p>
      </>
    )
  }

  return (
    // card container
    <div className='w-72 h-96 border rounded-md relative flex-col items-center bg-lightShade-200 dark:bg-lightShade-800'>
      {/* Card Header container */}
      <div className='w-full h-full p-1'>
        {/* image when hover will zoom in */}
        <Image src={`/blog_images/${article.coverImage}`} alt={`صورة الغلاف لموضوع ${article.title}`} width={0}
          height={0}
          sizes='100vw'
          className='aspect-16/9 object-cover w-full rounded-t-md mb-2' />
        {/* Card Body container */}
        <div className='flex-col items-center justify-center h-40 m-2'>
          {/* header including the title and the time */}
          <div>
            <h2 className='my-2 text-lg text-center font-bold text-mainBrand-600 dark:text-mainBrand-100'>{article.title}</h2>
            <p className='text-xs text-left text-darkAccent-400 dark:text-white '>
              <span >تاريخ النشر: </span>
              <span>
                {new Date(article.date).toLocaleDateString('ar-SY')}
              </span>
            </p>
          </div>
          {/* the article description if exsist */}
          {article.description ? < ArticleDescription description={article.description} /> : null}
        </div>
        {/* Card Footer container */}
        {/* show information icon */}
        <ShowInformation inlineText={"إضغط  للحصول على المزيد من المعلومات المرتبطة بهذا المنشور."}>
          <ArticleInformation article={article} />
        </ShowInformation>
        {/* Read more link */}
        <div className="absolute bottom-2 left-2 flex justify-between hover:translate-y-0.5 transform transition duration-300 ease-in-out">
          <ReadMoreButton link={`/articles/${article.slug}`} buttonColor='mainBrand' ariaDescription={`Read more about ${article.title}`}>اقرأ المزيد</ReadMoreButton>
        </div>
      </div>
    </div>
  );
}