import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function SoonPageMetadata() {
  const title = "مشاريعنا القادمة";
  const description =
    "مجموعة المشاريع التي يتم العمل على إتمامها حالياً.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/support-us`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/soon-page-cover-image.png`,
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
