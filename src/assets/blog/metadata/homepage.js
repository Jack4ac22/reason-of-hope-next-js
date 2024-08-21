import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function homepageMetadata() {
  return {
    title: "Reson of Hope - A Reformed Christian Blog",
    description: "Reson of Hope is a Reformed Christian blog",
    openGraph: {
      title: "Reson of Hope - A Reformed Christian Blog",
      description: "Reson of Hope is a Reformed Christian blog",
      url: metadataHost,
      images: [
        {
          url: `${metadataHost}/blog_images/ROH.png`,
          width: 800,
          height: 600,
          alt: "Cover Image for Reson of Hope",
        },
      ],
      type: "website",
    },
  };
}
