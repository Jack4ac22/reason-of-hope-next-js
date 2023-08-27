import {
  getArticlesByTag,
  getAllTagsCount,
} from "../../utilities/tags-functions";
import Link from "next/link";

export default function TagArtilePage(props) {
  const { articles, slug } = props;
  return (
    <>
      <Link href={`/tags`}>return to all tags</Link>
      <h1>مقالات بحسب الوسم: {slug}</h1>
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
          <Link href={"/objections"}>
            <h2>اعتراضات</h2>
          </Link>
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
            <h2>كلمات</h2>
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
  const articles = getArticlesByTag(slug);
  return {
    props: {
      articles: articles,
      slug: slug,
    },
    revalidate: 30000,
  };
}
export async function getStaticPaths() {
  const tags = getAllTagsCount();
  const slugs = tags.map((tag) => tag.tag);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
