import metadataHost from "@/assets/blog/metadata/metadata-variables";

export default function BooksPageMetadata() {
  const title = "الكُتب المُترجمة";
  const description =
    "نقدم إليكم نخبة من الكتب والكُتيّبات المترجمة من اللغة الإنكليزية، والتي تتعامل مع مواضيع مختلفة ومهمة مثل قضيّة الأصول وقضية التعامل مع سفر التكوين والكتاب المقدس.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/publications/books`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/books-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Books Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
