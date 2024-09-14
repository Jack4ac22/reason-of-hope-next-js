import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function CultsPageMetadata() {
  const title = "الديانات والطوائف";
  const description =
    "هذه السلسلة هي مجموعة من دراسات تتعامل مع الديانات والطوائف العالمية من منظور إيمانيّ مسيحيّ. تتضمن دراسات عن الهندوسية والبوذية والعديد من الديانات الأرضية الأخرى.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/publications/cults`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/cults-page-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Cults Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
