import metadataHost from "@/assets/blog/metadata/metadata-variables";
export default function ObjectionsSectionFourPageMetadata() {
  const title = "القسم الرابع: الإختلافات بين المُسَبِّبْ والنَّاتِج";
  const description =
    "سوف نقوم في هذا القسم بفحص الإدعاءات التي يتم تقديمها بأن الكتاب المقدس يناقض نفسه فيما يختص بالمسببات – أي: مَنْ الشخص أو ما الأمْرُ الذي تسبب بوقوع أحداث معيّنة؟ ونجد أنه يتم تقديم إحدى الآيات على أنها تُقَدِّمُ مُسبِّباً معيناً في الوقت الذي تُقدِّم آية أُخرى مُسبِّباً آخر، فأيٌّ منهما هو الصحيح؟ \n إن المُسبِّبات تكون في معظم الحالات متعددة الأوجه، ومعظم الأحداث تمتلك مُسبِّبات متعدِّدة؛ وبالتالي فإنه من الممكن أن نجد آيتين مختلفتين تقومان بتقديم مُسبِّبين صحيحين دون وجود أي تناقض. \n على سبيل المثال، مالذي يتسبب بهطول الأمطار؟ هل هي رطوبة الهواء، أم انخفاض درجة حرارة الهواء إلى مادون نقطة التندِّي، أم وجود جبهة هوائية باردة، أم الجاذبية التي تقوم بجذب قطرات المطر، أم قوى الطبيعة، أم الله؟ \n إن جميع الأمور التي سبق ذكرها هي مُسبِّبات لهطول الأمطار، ولا يوجد أي تناقض فيما بينها، إنما هي مختلفة بشكل متوافق. ويعتبر الأمر ارتكاباً لمغالطة التشعب في حال تم الإفتراض بأن حادثة معينة أو نتيجة معينة تمتلك مُسَبِّبَاً واحداً فقط. إضافةً إلى ذلك، فإنه لمجرد أن حادثتين قد وقعتا في وقت واحد فإن هذا لن يعني بالضرورة بأن إحداهما قد تسبَّبت بالأُخرى، وهذا ما يعرف بمغالطة المُسبِّبات الخاطئة. إنَّ هذه الأخطاء في التفكير المنطقي هي ما يقف وراء الكثير من الأخطاء النقدية التي يرتكبها النُقّاد في اعتراضاتهم المقدمة والتي سوف يتم التعامل معها في هذا القسم";
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${metadataHost}/objections/section-4`,
      images: [
        {
          url: `${metadataHost}/blog_pages_covers/objections-section-4-cover-image.webp`,
          width: 1024,
          height: 1024,
          alt: "Cover Image for objections-section-4",
        },
      ],
      type: "website",
      site_name: "Reason of Hope",
    },
  };
}