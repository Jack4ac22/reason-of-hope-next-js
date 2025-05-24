import RelatedArticles from '@/components/blog-components/article-page/article-footer-components/related-articles';
import FallaciesList from "@/components/blog-components/article-page/article-footer-components/fallacies-list"
import { getResourcesLinksFromArticle } from "@/utils/blog/general-functions";
import PdfViewer from '@/components/uneversal-items/pdf-viewer';
export default function ArticleFooter({ article }) {
  const pdfLink = getResourcesLinksFromArticle(article)["pdf"];
  if (article.directory === "static-pages") return null
  console.log(`localhost:3000/publications/${pdfLink}`)
  return (
    <>
      {pdfLink && <PdfViewer url={`/publications/${pdfLink}`} />}
      <FallaciesList article={article} />
      <RelatedArticles article={article} />
    </>
  );
}