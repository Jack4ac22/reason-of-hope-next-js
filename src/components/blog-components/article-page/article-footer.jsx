import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
import FallaciesList from "@/components/blog-components/article-page/article-footer-components/fallacies-list"
import CatTagFooter from '@/components/blog-components/article-page/article-footer-components/categories-tags-footer';
import PdfViewer from '@/components/uneversal-items/pdf-viewer';
import { getResourcesLinksFromArticle } from '@/utils/blog/general-functions';
export default function ArticleFooter({ article }) {
  if (article?.directory === "static-pages") return null

  const pdfLink = getResourcesLinksFromArticle(article)["pdf"];
  if (article.directory === "static-pages") return null
  return (
    <>
      <FallaciesList article={article} />
      {pdfLink && <PdfViewer url={pdfLink} />}
      <RelatedArticles article={article} />
      <CatTagFooter article={article} />
    </>
  );
}