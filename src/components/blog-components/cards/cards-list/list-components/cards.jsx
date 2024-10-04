import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
import Link from "next/link";
export default function DisplayedCards({ articles, order, perPage, page }) {
  // check if the perpage exist and a number else use 6 as default
  if (!perPage || isNaN(perPage)) {
    perPage = 6;
  }
  if (order === "latest") {
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (order === "oldest") {
    articles.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (order === "title_asc") {
    articles.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === "title_dsc") {
    articles.sort((a, b) => b.title.localeCompare(a.title));
  }

  console.log("perPage: ", perPage, "----- page: ", page);
  if (page > Math.ceil(articles.length / perPage)) {
    // page = Math.ceil(articles.length / perPage);
  }
  articles = articles.slice((page - 1) * perPage, page * perPage);


  if (articles.length === 0) {
    return (
      <div className="flex-col space-y-3 justify-center items-center my-14">
        <p className="text-2xl">لا يوجد مقالات تتوافق مع معايير البحث التي تفضلتم باستخدامها.</p>
        <p className="text-2xl">يرجى المحاولة مرة أخرى بمعايير بحث مختلفة.</p>
        <p className="text-2xl">يمكنكم العودة إلى <Link href="/" className="info-link-button">الصفحة الرئيسية </Link> أو <Link Link
        href='contact' className="info-link-button">الإتصال بنا</Link></p>
        <p className="text-2xl">شكراً لكم</p>

      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center md:justify-evenly items-center content-center w-full m-2">
      {articles.map((article, index) => (
        <ArticleCard key={`${index}_${article.slug}`} article={article} />
      ))}
    </div>
  );
}