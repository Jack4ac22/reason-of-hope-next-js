import metadataHost from "@/assets/blog/metadata/metadata-variables";
import {
  getArticlesByCategory,
  getArticlesByTag,
} from "@/utils/blog/articles-functions";
import { language } from "gray-matter";
export default function CatTagMetadata(type = "category", keyword = "") {
  const articles =
    type === "category"
      ? getArticlesByCategory(keyword)
      : getArticlesByTag(keyword);
  const title =
    type === "category"
      ? "القسم"
      : "الوسم" + ": " + decodeURIComponent(keyword.replaceAll("-", " "));

  const description = `مجموعة من المقالات والمنشورات التي تم تقديمها صمن ${title}, وتتضمن مواضيع متنوعة تشمل ${
    articles.length
  } مقالة. تتضمن عناوين مثل: ${
    articles && articles.map((article) => article.title).join(", ")
  }`;
  const cover_image_name = "generic-cover-image.webp";
  return {
    title: title,
    description: description,
    keywords: articles.map((article) => article.title),
    language: "ar",
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/${
        type === "category" ? "categories" : "tags"
      }/${keyword}`,
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
