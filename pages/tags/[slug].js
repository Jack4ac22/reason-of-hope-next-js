import {
  getArticlesByTag,
  getAllTagsCount,
} from "../../utilities/tags-functions";
import Link from "next/link";

export default function TagArtilePage(props) {
  const { articles, slug } = props;
  return (
    <>
      <h2>tags</h2>
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
