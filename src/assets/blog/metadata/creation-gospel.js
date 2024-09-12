import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function CreationGospelPageMetadata() {
  const title = "الكتاب المقدس والإنجيل";
  const description =
    "يتعرض الكتاب المقدس لهجمات ممنهجة وشركة من قِبَل العلمانيّين والمُتديّنين المُساومين، إلا أنَّ كلمة الله لا تسقط. \n تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/words`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/creation-gospel-cover-image.webp`,
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
