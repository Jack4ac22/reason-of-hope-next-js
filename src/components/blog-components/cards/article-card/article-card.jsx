import ShowInformation from '@/components/blog-components/ui/buttons/show-information';
import ArticleInformation from '@/components/blog-components/cards/article-card/card-items/article-information';
import ReadMoreButton from '@/components/blog-components/ui/buttons/read-more-button';
import FeaturedArticle from '@/components/blog-components/cards/article-card/card-items/featured-article';
import RegularArticleBody from '@/components/blog-components/cards/article-card/card-items/regular/regular-article-body';
import BookArticleBody from '@/components/blog-components/cards/article-card/card-items/book/book-article-body';

export default function ArticleCard({ article, simple = false }) {
  return (
    // card container
    <div className='m-2 w-72 h-96 border rounded-md relative flex-col items-center bg-lightShade-200 dark:bg-lightShade-800'>
      {/* Card Header container */}
      <div className='w-full h-full p-1'>
        {/* Featured banner */}
        <FeaturedArticle article={article} />
        {/* Boody */}
        {!article.isBook && <RegularArticleBody article={article} />}
        {article.isBook && <BookArticleBody article={article} />}
        {/* show information icon */}
        {!simple &&
          <ShowInformation inlineText={"إضغط  للحصول على المزيد من المعلومات المرتبطة بهذا المنشور."}>
            <ArticleInformation article={article} />
          </ShowInformation>
        }
        {/* Read more link */}
        <div className="absolute bottom-2 left-2 flex justify-between hover:translate-y-0.5 transform transition duration-300 ease-in-out">
          <ReadMoreButton link={`/articles/${article.slug}`} buttonColor='mainBrand' ariaDescription={`Read more about ${article.title}`}>اقرأ المزيد</ReadMoreButton>
        </div>
      </div>
    </div>
  );
}