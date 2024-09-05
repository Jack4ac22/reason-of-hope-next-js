import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function contactUsMetadata() {
  const title = "اتصل بنا | سبب الرجاء";
  const description =
    "يمكنكم التواصل معنا وطرح تساؤلاتكم واستفساراتكم فيما يتعلق بمنشوراتنا، كما يمكنكم وضع اقتراحاتكم لتحسين الخدمة المقدمة.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/contact-us`,
      images: [
        {
          url: `${metadataHost}/blog-pages-covers/contact-us-cover-image.webp`,
          width: 800,
          height: 600,
          alt: "Cover Image for",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
