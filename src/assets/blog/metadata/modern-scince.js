import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ModernScincePageMetadata() {
  const title = "علوم مُعاصرة";
  const description =
    "يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان الكتاب المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة تُظهر بُطلان هذه الإدعاءات.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/creation/modern-science`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/modern-scince-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Modern Science",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
