import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function LogicPageMetadata() {
  const title = "المنطق";
  const description = `مجموعة من الدراسات في علم المنطق بالإضافة إلى تقديم أشهر المعالطات والأخطاء المنطقية مع أمثلة تطبيقية عن استخدامها في سياق الجدلات التي يتم تقديمها ضد الكتاب المقدس والسرد التوراتي عن الخلق.`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/logic`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/logic-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for logic page.",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
