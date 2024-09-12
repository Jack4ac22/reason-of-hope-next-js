import ArticleCard from "@/components/blog-components/cards/article-card/article-card";
export default function DisplayedCards({ articles, order, perPage, page }) {
  // check if the perpage exist and a number else use 6 as default
  if (!perPage || isNaN(perPage)) {
    perPage = 6;
  }
  if (order === "latest") {
    articles.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  } else if (order === "oldest") {
    articles.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
  } else if (order === "title_asc") {
    articles.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === "title_dsc") {
    articles.sort((a, b) => b.title.localeCompare(a.title));
  }
  articles = articles.slice((page - 1) * perPage, page * perPage);
  
  return (
    <div className="flex flex-wrap justify-center md:justify-evenly items-center content-center w-full m-2">
      {articles.map((article, index) => (
        <ArticleCard key={`${index}_${article.slug}`} article={article} />
      ))}
    </div>
  );
}