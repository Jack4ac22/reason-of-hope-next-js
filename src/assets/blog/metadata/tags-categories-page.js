import metadataHost from "@/assets/blog/metadata/metadata-variables";
import {
  getAllCategoriesWithCount,
  getAllTagsWithCount,
} from "@/utils/blog/articles-functions";
import { language } from "gray-matter";

export default function CatsTagsMetadata(type = "category") {
  const list =
    type === "category" ? getAllCategoriesWithCount() : getAllTagsWithCount();
  const title = type === "category" ? "جميع الأقسام" : "جميع الوسوم";

  const description = ` ${title} التي تم تقديمها على موقع سبب الرجاء، وتتضمن مواضيع متنوعة تشمل ${
    list.length
  } ${type === "category" ? "قسم" : "وسم"} . تتضمن عناوين مثل: ${list
    .map((item) => item.name)
    .join(", ")}`;
  const cover_image_name = "generic-cover-image.webp";
  return {
    title: title,
    description: description,
    keywords: list.map((item) => item.title),
    language: "ar",
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/${type === "category" ? "categories" : "tags"}`,
      images: [
        {
          url: `${metadataHost}/blog_images/${cover_image_name}`,
          alt: `Image for ${title}`,
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
