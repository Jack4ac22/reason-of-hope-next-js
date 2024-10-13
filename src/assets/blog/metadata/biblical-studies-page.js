import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function BiblicalStudiesPageMetadata() {
  const title = "دراسات كتابية";
  const description =
    "مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على مؤلفات لنخبة من اللاهوتيين المُحافظين";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/publications/studies`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/biblical-studies-page-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Biblical Studies Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
