import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
import FallaciesList from "@/components/blog-components/article-page/article-footer-components/fallacies-list"
import CatTagFooter from '@/components/blog-components/article-page/article-footer-components/categories-tags-footer';
import PdfViewer from '@/components/uneversal-items/pdf-viewer';
export default function ArticleFooter({ article }) {
  if (article?.directory === "static-pages") return null
  return (
    <>
      <FallaciesList article={article} />
      {/* <PdfViewer url={article?.pdfUrl} /> */}
      <RelatedArticles article={article} />
      <CatTagFooter article={article} />
    </>
  );
}