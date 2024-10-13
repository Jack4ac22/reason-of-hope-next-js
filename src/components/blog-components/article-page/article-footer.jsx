import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
import FallaciesList from "@/components/blog-components/article-page/article-footer-components/fallacies-list"
export default function ArticleFooter({ article }) {
  if (article.directory === "static-pages") return null
  return (
    <>
      <FallaciesList article={article} />
      <RelatedArticles article={article} />
    </>
  );
}