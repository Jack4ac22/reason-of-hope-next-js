import Head from "next/head";
import CreationCardsList from "../../components/creation-components/creation-cards-list";
import Link from "next/link";
import {
  // getAllCreationsCategories,
  // getCreationArticlesByCategory,
  getAllCreationArticles,
} from "../../utilities/creation-functions";

export default function AllCreationArticlePage(props) {
  const creationArticles = props.creationArticles;
  return (
    <>
      <Head>
        <title>قضية الخلق</title>
        <meta
          name="description"
          content="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. "
        />
        <meta property="og:title" content="قضيّة الخلق" />
        <meta
          property="og:description"
          content="إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. "
        />
        <meta property="og:image" content={`/blog-images/ROH.png}`} />
      </Head>
      <h1>مقالات الخلق:</h1>
      <ul>
        <CreationCardsList creations={creationArticles} />
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  // const allCategories = getAllCreationsCategories();
  // allCategories.map((category) => {
  //   const articlesByCategory = getCreationArticlesByCategory(category.category);
  //   category.articles = articlesByCategory;
  // });
  const allArticlesByTitle = getAllCreationArticles("slug");

  return {
    props: {
      creationArticles: allArticlesByTitle,
    },
  };
}
