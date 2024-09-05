import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function BiblicalStudiesPageMetadata() {
  const title = "دراسات كتابية";
  const description = `مجموعة من الدراسات التي تتناول عدداً من المواضيع المرتبطة بالكتاب المقدس. وتهدف هذه الدراسات إلى مناقشة عدد من المواضيع الحياتية الإيمانية من خلال النظر إليها باستخدام عدسة الكتاب المقدس، والهدف: تحفيز القارئ لإعادة النظر في بعض الممارسات أو تقييم بعض المعتقدات لرفض الخاطئ منها والتيقن من السليم.`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/studies`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/biblical-studies-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for studies page.",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
