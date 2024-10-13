import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
import Link from "next/link";

/**
 * DisplayedCards Component
 *
 * This component renders a list of articles based on the provided `order`, `perPage`, and `page` parameters.
 * It sorts the articles according to the specified order, paginates them, and displays the articles accordingly.
 * If no articles match the criteria, it displays a message with options to return to the homepage or contact support.
 *
 * @param {Array} articles - Array of articles to be displayed.
 * @param {string} order - The order in which to sort the articles. Options: "latest", "oldest", "title_asc", "title_dsc".
 * @param {number} perPage - Number of articles to display per page.
 * @param {number} page - The current page number to display.
 * @returns JSX.Element
 */
export default function DisplayedCards({ articles, order, perPage, page }) {
  // Validate and set default for perPage if necessary
  perPage = !perPage || isNaN(perPage) ? 6 : perPage;

  // Sort articles based on the order parameter
  switch (order) {
    case "latest":
      articles.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      articles.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "title_asc":
      articles.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title_dsc":
      articles.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  // Slice articles for pagination
  const maxPage = Math.ceil(articles.length / perPage);
  const currentPage = Math.min(page, maxPage); // Ensure currentPage does not exceed maxPage
  articles = articles.slice((currentPage - 1) * perPage, currentPage * perPage);

  // Render no articles message if no articles to display
  if (articles.length === 0) {
    return (
      <div className="flex-col space-y-3 justify-center items-center my-14">
        <p className="text-2xl">لا يوجد مقالات تتوافق مع معايير البحث التي تفضلتم باستخدامها.</p>
        <p className="text-2xl">يرجى المحاولة مرة أخرى بمعايير بحث مختلفة.</p>
        <p className="text-2xl">
          يمكنكم العودة إلى <Link href="/" className="info-link-button">الصفحة الرئيسية</Link> أو
          <Link href="/contact" className="info-link-button">الإتصال بنا</Link>
        </p>
        <p className="text-2xl">شكراً لكم</p>
      </div>
    );
  }

  // Render the articles
  return (
    <div className="flex flex-wrap justify-center md:justify-evenly items-center content-center w-full m-2">
      {articles.map((article, index) => (
        <ArticleCard key={`${index}_${article.slug}`} article={article} />
      ))}
    </div>
  );
}
