import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function PublicationsMainPageemePageMetadata() {
  const title = "المنشورات";
  const description =
    "مجموعة من المنشورات التي عملنا على نقلها إلى اللغة العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من المراجع الموثَّقة والموثوقة. تتضمن كتب مترجمة بالإضافة إلى عدد من الكتيبات والأبحاث المستقلة التي قمنا بإعدادها أو ترجمتها من مختلف المصادر ذات الموثوقية.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/publications`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/publications-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Publications Main Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
