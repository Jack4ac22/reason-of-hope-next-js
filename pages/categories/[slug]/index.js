import {
  getAllCategoriesCount,
  getAllArticlesByCategory,
} from "../../../utilities/categories-functions";
import Link from "next/link";

export default function AllCategoriesPage(props) {
  const { articles, slug } = props;
  return (
    <>
      <Link href={`/categories`}>return to all categories</Link>
      <h1>مقالات بحسب التصنيف: {slug}</h1>
      {articles.creation.count > 0 && (
        <>
          <Link href={"/creation"}>
            <h2>قضية الخلق</h2>
          </Link>
          <ul>
            {articles.creation.articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/creation/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {articles.objection.count > 0 && (
        <>
          <h2>اعتراضات</h2>
          <ul>
            {articles.objection.articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/objections/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {articles.logic.count > 0 && (
        <>
          <Link href={"/logic"}>
            <h2>المنطق</h2>
          </Link>
          <ul>
            {articles.logic.articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/logic/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {articles.publication.count > 0 && (
        <>
          <Link href={"/publications"}>
            <h2>منشورات</h2>
          </Link>
          <ul>
            {articles.publication.articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/publications/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {articles.word.count > 0 && (
        <>
          <Link href={"/words"}>
            <h2>كلمة ورسالة</h2>
          </Link>
          <ul>
            {articles.word.articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/words/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const articles = getAllArticlesByCategory(slug);

  return {
    props: {
      articles: articles,
      slug: slug,
    },
    revalidate: 30000,
  };
}
export async function getStaticPaths() {
  const categories = getAllCategoriesCount();
  const slugs = categories.map((category) => category.category);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
