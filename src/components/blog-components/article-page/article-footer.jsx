import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
export default function ArticleFooter({ article }) {
  if (article.directory === "static-pages") return null
  return (
    <>
      <RelatedArticles article={article} />
    </>
  );
}