import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function supportUsPageMetadata() {
  const title = "support-us";
  const description =
    "Support ReasonOfHope via prayers and donations";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/support-us`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/support-page-cover-image.png`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Support Us Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
