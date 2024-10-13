import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ObjectionsSectionOnePagePageMetadata() {
  const title = "القسم الأول: الإختلافات الكمية أو العددية";
  const description =
    "يتناول هذا القسم الإدعاءات القائلة بأنه يوجد تناقض بين تصريحات آيات الكتاب المقدس عن تعداد بعض الأمور المختلفة.\n وهنا يجدر بنا التنبه إلى أن وجود تناقض بين الآيات يتطلب أن تكون التصريحات تُقدِّم معلومات متناقضةً حقاً.\n على سبيل المثال، إن صرَّحت إحدى الآيات بأن ثلاثة أشخاص فقط كانوا موجودين وحاضرين في المكان والزمان عينه الذي تصفه آية أُخرى وتقول بوجود أربعة أشخاص على الأقل في ذات الزمان والمكان وفي ذات الواقعة (أي ذات السياق وذات المعنى)؛ فإنَّ الآيتان من هذا النوع ستكونان متناقضتان.\n إن كلمتي ”فقط“ و”على الأقل“ تمتلكان أهمية كبيرة في إثبات وجود تناقض بين الآيات، إذ أنَّ الإفتراض بأنَّ ”ثلاثة أشخاص“ تحمل ذات معنة ”ثلاثة أشخاص فقط“ دون وجود مُبرّرٍ كافٍ من السياق النصي للآية إنما هو ارتكاب لخطأ منطقي يُعرف بإسم مُغالطة الفروع. وهذا هو واقع الحال في العدد الأكبر من الإدعاءات التالية.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/objections/section-1`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/objections-section-1-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for objections-section-1",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
