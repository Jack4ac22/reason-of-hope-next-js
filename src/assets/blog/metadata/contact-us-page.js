import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function contactUsMetadata() {
  return {
    title: "اتصل بنا | سبب الرجاء",
    description:
      "يمكنكم التواصل معنا وطرح تساؤلاتكم واستفساراتكم فيما يتعلق بمنشوراتنا، كما يمكنكم وضع اقتراحاتكم لتحسين الخدمة المقدمة.",
    openGraph: {
      title: "اتصل بنا | سبب الرجاء",
      description:
        "يمكنكم التواصل معنا وطرح تساؤلاتكم واستفساراتكم فيما يتعلق بمنشوراتنا، كما يمكنكم وضع اقتراحاتكم لتحسين الخدمة المقدمة.",
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
