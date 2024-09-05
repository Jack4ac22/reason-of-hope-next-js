import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function WordsPageMetadata() {
  const title = "كلمة ورسالة";
  const description =
    "مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/words`,
      images: [
        {
          url: `${metadataHost}/blog-pages-covers/words-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
