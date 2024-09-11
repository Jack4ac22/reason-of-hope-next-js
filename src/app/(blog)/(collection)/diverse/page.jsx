import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";
import DiversePageMetadata from "@/assets/blog/metadata/diverse";

export const metadata = DiversePageMetadata;
export default function DiversesPage() {
  const devotions_articles = getArticlesByCategory("تأملات");
  const words_articles = getArticlesByCategory("كلمة-ورسالة");
  const logic_articles = getArticlesByCategory("المنطق");
  const studies_articles = getArticlesByCategory("دراسات-كتابية");
  const logic_section_object = {
    title: "أولاً - المنطق:",
    description: "مجموعة من الدراسات في علم المنطق بالإضافة إلى تقديم أشهر المعالطات والأخطاء المنطقية مع أمثلة تطبيقية عن استخدامها في سياق الجدلات التي يتم تقديمها ضد الكتاب المقدس والسرد التوراتي عن الخلق.",
    link: "/logic",
    articles: logic_articles,
    reversed: false,
  }
  const studies_section_object = {
    title: "ثانياً - دراسات كتابية:",
    description: "مجموعة من الدراسات التي تتناول عدداً من المواضيع المرتبطة بالكتاب المقدس. وتهدف هذه الدراسات إلى مناقشة عدد من المواضيع الحياتية الإيمانية من خلال النظر إليها باستخدام عدسة الكتاب المقدس، والهدف: تحفيز القارئ لإعادة النظر في بعض الممارسات أو تقييم بعض المعتقدات لرفض الخاطئ منها والتيقن من السليم.",
    link: "/studies",
    articles: studies_articles,
    reversed: true,
  }
  const words_section_object = {
    title: "كلمة ورسالة:",
    description: "مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر.",
    link: "/words",
    articles: words_articles,
    reversed: false,
  }
  const devotions_section_object = {
    title: "تأملات:",
    description: "مجموعة من التأملات في بعض النصوص والمواضيع الكتابية لاستخلاص العِبر والبحث في تطبيقاتها على حياتنا اليومية.",
    link: "/devotions",
    articles: devotions_articles,
    reversed: true,
  }
  return (
    <main className="page-main uni-text-color" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <h1>متفرقات</h1>
            <p id="page-heading" className="sr-only">متفرقات</p>
            <p>
              مجموعة من المقالات والمنشورات التي تناقش مواضيع متنوعة تُظهر ارتباط الإيمان المسيحية بمختلف جوانب الحياة، وتقدم تطبيقات عملية للإيمان المسيحي في الحياة اليومية.
            </p>
            <p>
              تنقسم هذه المواضيع إلى الأقسام التالية:
            </p>
          </header>
        </section>
        <SectionWithSlider sectionObject={logic_section_object} />
        <SectionWithSlider sectionObject={studies_section_object} />
        <SectionWithSlider sectionObject={words_section_object} />
        <SectionWithSlider sectionObject={devotions_section_object} />
      </div>
    </main>
  );
}