import { FaCross } from "react-icons/fa";
export default function FeaturedArticle({ article }) {
  const featuredArticles = process.env.NEXT_PUBLIC_FEATURED_ARTICLES ? process.env.NEXT_PUBLIC_FEATURED_ARTICLES.split(',').map((article) => article.trim()) : [];

  if (article.slug && featuredArticles.includes(article.slug)) {
    return (
      <div className='absolute top-2 right-2 flex text-sm text-white bg-mainBrand-500 dark:bg-mainBrand-200 opacity-70 hover:opacity-100
    border-0 p-1 rounded-md rotate-45 translate-y-6 translate-x-3 duration-200'>
        <FaCross />
        <span className='px-2' >{article.isBook ? "كتاب مُمَيَّز" : " موضوع مُمَيَّز"}</span>
      </div>
    )
  }
  return null;
}