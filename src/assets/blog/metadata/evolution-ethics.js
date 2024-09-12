import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function EthicsEvolutionPageMetadata() {
  const title = "التطور ونتائجه";
  const description =
    "إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على أساس أنها من المسلّمات. سيتم في هذا القسم التعامل مع الإفتراضات التطورية، بالإضافة إلى إظهار النتائج التي ترتبط بشكل أو بآخر بتبني هذه المعتقدات.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/creation/evolution-ethics`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/evolution-ethics-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Evolution and Ethics",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
