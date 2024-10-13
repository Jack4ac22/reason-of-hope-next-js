import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function CreationMainPagePageMetadata() {
  const title = "قضية الخلق";
  const description =
"إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات! تعرف على الحقائق العلمية واللاهوتية التي تُفند الشبهات المُثارة حول قضية الخلق.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/creation`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/creation-main-page-cover-image.webp`,
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
