import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function articleMetadata(article) {
  return {
    date: article?.date,
    title: article?.title,
    description: article?.description,
    keywords: [...article?.tags, ...article?.categories],
    language: "ar",
    openGraph: {
      title: article?.title,
      description: article?.description,
      url: `${metadataHost}/${article?.directory}/${article?.slug}`,
      images: [
        {
          url: `${metadataHost}/blog_images/${article?.coverImage}`,
          alt: `Image for ${article?.title}`,
        },
      ],
      type: "article",
      article: {
        publishedTime: article?.date,
        authors: article?.authors,
        section: article?.directory,
        tags: article?.tags,
      },
    },
  };
}
