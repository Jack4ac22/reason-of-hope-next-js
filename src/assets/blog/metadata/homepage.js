import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function homepageMetadata() {
  const title = "Reson of Hope - سبب الرجاء";
  const description = "صفحة مسيحية إصلاحية دفاعية تُقدِّم إجابات كتابية على الأسئلة الشائعة حول الإيمان المسيحي والكتاب المقدس بالإضافة إلى الكثير من المنشورات والترجمات لمواضيع ترتبط بالسرد التوراتي للخلق، الخلاص بحسب الكتاب المقدس، التعاليم المسيحية الإصلاحية وسواها.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: metadataHost,
      images: [
        {
          url: `${metadataHost}/blog_images/ROH.png`,
          width: 800,
          height: 600,
          alt: "Cover Image for Reson of Hope main oage",
        },
      ],
      type: "website",
    },
  };
}
