import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function DiversePageMetadata() {
  const title = "متفرقات";
  const description = `مجموعة من المقالات والمنشورات التي تناقش مواضيع متنوعة تُظهر ارتباط الإيمان المسيحية بمختلف جوانب الحياة، وتقدم تطبيقات عملية للإيمان المسيحي في الحياة اليومية.
  تشتمل هذه الصفحة على أقسام مختلفة: المنطق، دراسات كتابية، كلمة ورسالة و تأملات يومية.`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/diverse`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/diverse-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for diverse page.",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
