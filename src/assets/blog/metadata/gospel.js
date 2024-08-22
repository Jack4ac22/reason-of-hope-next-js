import { getSingleArticleData } from "@/utils/blog/articles-functions";
const page = getSingleArticleData("static-pages", "gospel", "pagesFolder");
import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function gospelMetadata() {
  return {
    title: page.title,
    description: "page.description",
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${metadataHost}/gospel`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/${page.coverImage}`,
          alt: `Image for ${page.title}`,
        },
      ],
      type: "article",
      article: {
        publishedTime: page.date,
        authors: ["Jack Kazanjyan", "Justin Peters"],
        section: "Gospel",
        tags: page.tags,
      },
    },
  };
}
