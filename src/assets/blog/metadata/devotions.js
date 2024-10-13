import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function DevotionsPageMetadata() {
  const title = "تأملات";
  const description = `مجموعة من التأملات في بعض النصوص والمواضيع الكتابية لاستخلاص العِبر والبحث في تطبيقاتها على حياتنا اليومية.`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/devotions`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/devotions-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for devotions page.",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
