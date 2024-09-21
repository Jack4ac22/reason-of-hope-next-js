import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
export default function ArticleFooter({ article }) {
  return (
    <>
      <RelatedArticles article={article} />
      Article footer

    </>
  );
}