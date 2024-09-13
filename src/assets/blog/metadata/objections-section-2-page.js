import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ObjectionSectionTwoPageMetadata() {
  const title = "القسم الثاني: الإختلافات في أسماء الأشخاص والمواقع، والأنساب";
  const description =
    "يتناول هذا القسم الإدعاءات القائلة بأن الكتاب المُقدَّس يخلط بين أسماء الأشخاص والمواقع، أو أنه يذكر بشكل خاطئ صلات القُرْبى بين أشخاص مُعَيَّنين.\n إن الكتاب المقدس يحتوي على التاريخ الحقيقي لذلك فهو يذكر في كثير من المواضع أسماء المواقع التي وقعت فيها الأحداث المهمّة، وكذلك أسماء الشخصيات التي لعبت أدواراً فيها. كما ويذكر في مواضع كثيرة أُخرى، سلاسل تفصيلية للأنساب، فهل يناقض نفسه في هذا الخصوص؟ \n هذا هو ما سوف تتم الإجابة عليه في هذا القسم.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/objections/section-2`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/objections-section-2-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for objections-section-2",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
