import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ObjectionsSectionThreePageMetadata() {
  const title = "القسم الثالث: الإختلافات في توقيت الأحداث";
  const description =
    "يتم في الكثير من الأحيان تقديم تصريحات تفيد بأن الكتاب المُقدَّس يناقض نفسه فيما يتعلق بتوقيت الأحداث التاريخية التي ينقلها لنا. فلنفترض أن إحدى آيات الكتاب المُقدَّس تقول بأن الحدث (أ) قد وقع قبل الحدث (ب)، و في الوقت عينه توجد آية أُخرى تُصرَّح بأن الحدث (ب) قد وقع أولاً، ألن يتسبب هذا الأمر مشكلة؟ \n إنَّ معظم الحالات التي سنتناولها في هذا القسم ستعكس لنا كيف أن القارئ قام بافتراض ترتيبٍ شخصيٍّ لوقوع الأحداث في الوقت الذي لم تصرح فيه الآيات بترتيب وقوع الأحداث. العديد من التناقضات المزعومة المُدرجة في هذا القسم سيتم دحضها من خلال قراءة الآيات بطريقة أمينة ودون تقديم افتراضات مسبقةٍ لا يوجد لها مبرّر كافٍ.";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/objections/section-3`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/objections-section-3-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for objections-section-3",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}
