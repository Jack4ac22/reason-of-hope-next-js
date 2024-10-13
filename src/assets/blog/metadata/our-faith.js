import { getSingleArticleData } from "@/utils/blog/articles-functions";
const page = getSingleArticleData("static-pages", "our-faith", "pagesFolder");
import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ourFaithMetadata() {
  return {
    title: page.title,
    description: "page.description",
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${metadataHost}/our-faith`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/${page.coverImage}`,
          alt: `Image for ${page.title}`,
        },
      ],
      type: "article",
      article: {
        publishedTime: page.date,
        authors: ["Jack Kazanjyan"],
        section: "Statement Of Faith",
        tags: page.tags,
      },
    },
  };
}
