import { getSingleArticleData } from "@/utils/blog/articles-functions";
const page = getSingleArticleData('static-pages', 'our-faith',"pagesFolder")


export default function ourFaithMetadata() {
  return {
    title: page.title,
    description: "page.description",
    openGraph: {
      title: page.title,
      description: page.description,
      url: "https://www.resonofhope.com/our-faith",
      images: [
        {
          url: `/blog_pages_covers/${page.coverImage}`,
          alt: `Image for ${page.title}`,
        },
      ],
      type: "website",
    },
  };
}
