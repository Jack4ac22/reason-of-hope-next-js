import Head from "next/head";
export default function ArticleHeader(props) {
  const article = props.article;
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description + " ... "} />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.description + " ... "}
        />
        <meta
          property="og:image"
          content={`https://reasonofhope.com/blog-images/${
            article.coverImage ? article.coverImage : 'ROH.png'
          }`}
        />
      </Head>
    </>
  );
}
