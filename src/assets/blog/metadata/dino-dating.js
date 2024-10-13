import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function DinoDatingPageMetadata() {
  const title = "الديناصورات والتأريخ";
  const description =
    "يتم استخدام الديناصورات كأداة لنقد التاريخ التوراتي، وذلك بعد أن يتم تأريخها إلى عدة ملايين من السنوات.\nتشتمل هذه الفئة على الدراسات المختصة بالديناصورات وتوافقها مع الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ المستخدمة في النظام العلماني.\n سيضاف إليها جميع الدراسات المختصة بالمستحاثات.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/words`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/dino-dating-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Dino Dating Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
