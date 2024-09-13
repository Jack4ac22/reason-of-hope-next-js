import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function CreationMainPagePageMetadata() {
  const title = "التناقضات المفترضة في الكتاب المقدس";
  const description =
    "يتواجد الكثير من الإدعاءات المنتشرة عبر فضاء المواقع الإلكترونية بأنَّ الكتاب المقدس مليء بالتناقضات، وبالتالي فإنَّه ليس مصدراً موثوقاً للحقيقة. كما يتم تقديم لوائح طويلة من الإنتقادات التي تتضمن إدعاءات بوجود آيات تُقدِّمُ تصريحات تناقض بعضها البعض، فما هي حقيقة هذه الإدعاءات؟ \n تقدم لكم هذه السلسلة من المقاطع المصورة نظرة عامة على هذه الآيات بالإضافة إلى تحليل منطقي لما يُعتقد بأنَّه تناقض بين الآيات وذلك بالإعتماد على علم المنطق. \n إن هذه الدراسات مبنية بشكل أساسي على كتاب بعنوان: Keeping Faith in an Age of Reason: Refuting Alleged Bible Contradictions. للدكتور جيسون لايل.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/objections`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/objections-main-page-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for Modern Science",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
