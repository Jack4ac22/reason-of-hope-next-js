import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function BiblicalWorldPageMetadata() {
  const title = "العالم التوراتي";
  const description =
    "يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من النقد الموجَّه إلى الكتاب المقدس. ويُعتبر الكثيرون أن سفر التكوين ليس سوى خرافة قديمة، وأن سرد الطوفان لا يمكن أن يكون حقيقيًا. ولكن هل يمكن أن يكون سرد الطوفان حقيقيًا؟ وهل يمكن أن يكون سفر التكوين موثوقًا؟ وهل يمكن أن يكون لهذه القصة أي تأثير على حياتنا اليومية؟\n تتضمن هذه الفئة مجموعة المقالات والدراسات المرتبطة بالتاريخ المسجل في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه المجموعة.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/creation/biblical-world`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/biblical-world-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Biblical World Page",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
