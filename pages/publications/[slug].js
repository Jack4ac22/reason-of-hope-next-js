import ArticleContentPageComponent from "../../components/article-components/single-article-page/article-content-page";
import {
  getPublicationsFiles,
  getPublicationData,
} from "../../utilities/publications-functions";

export default function PublicationsArtilePage(props) {
  const { article } = props;
  return (
    <>
      <ArticleContentPageComponent article={article} />
    </>
  );
}
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const publicationsArticleData = getPublicationData(slug);
  return {
    props: {
      article: publicationsArticleData,
    },
    revalidate: 30000,
  };
}

export function getStaticPaths() {
  const publicationsArticleFilenames = getPublicationsFiles();
  const slugs = publicationsArticleFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
