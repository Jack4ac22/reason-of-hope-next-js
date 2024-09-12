import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CreationMainPagePageMetadata from "@/assets/blog/metadata/creation-main-page";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";
import Link from "next/link";


export const metadata = CreationMainPagePageMetadata;
export default function CreationPage() {
  const biblical_world_articles = getArticlesByCategory("العالم-التوراتي");
  const evolution_ethics_articles = getArticlesByCategory("التطور-ونتائجه");
  const dino_articles = getArticlesByCategory("الديناصورات-والتأريخ");
  const modern_scince_articles = getArticlesByCategory("علوم-معاصرة");
  const creation_gospel_articles = getArticlesByCategory("الكتاب-المقدس-والإنجيل");
  const biblical_world_section_object = {
    title: "العالم التوراتي",
    description: "يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من النقد الموجَّه إلى الكتاب المقدس. ويُعتبر الكثيرون أن سفر التكوين ليس سوى خرافة قديمة، وأن سرد الطوفان لا يمكن أن يكون حقيقيًا. ولكن هل يمكن أن يكون سرد الطوفان حقيقيًا؟ وهل يمكن أن يكون سفر التكوين موثوقًا؟ وهل يمكن أن يكون لهذه القصة أي تأثير على حياتنا اليومية؟ تتضمن هذه الفئة مجموعة المقالات والدراسات المرتبطة بالتاريخ المسجل في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه المجموعة.",
    link: "/creation/biblical-world",
    articles: biblical_world_articles,
    reversed: false,
  }
  const creation_gospel_section_object = {
    title: "الكتاب المقدس والإنجيل",
    description: "يتعرض الكتاب المقدس لهجمات ممنهجة وشركة من قِبَل العلمانيّين والمُتديّنين المُساومين، إلا أنَّ كلمة الله لا تسقط. تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع.",
    link: "/creation/creation-gospel",
    articles: creation_gospel_articles,
    reversed: true,
  }
  const dino_section_object = {
    title: "الديناصورات والتأريخ",
    description: "يتم استخدام الديناصورات كأداة لنقد التاريخ التوراتي، وذلك بعد أن يتم تأريخها إلى عدة ملايين من السنوات. تشتمل هذه الفئة على الدراسات المختصة بالديناصورات وتوافقها مع الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ المستخدمة في النظام العلماني.",
    link: "/creation/dino-dating",
    articles: dino_articles,
    reversed: false,
  }
  const evolution_ethics_section_object = {
    title: "التطور ونتائجه",
    description: "إن الإيمان بالتطور يحمل عواقب ويتطلب افتراضات يتم تبنيها على أساس أنها من المسلّمات. سيتم في هذا القسم التعامل مع الإفتراضات التطورية، بالإضافة إلى إظهار النتائج التي ترتبط بشكل أو بآخر بتبني هذه المعتقدات.",
    link: "/creation/evolution-ethics",
    articles: evolution_ethics_articles,
    reversed: true,
  }
  const modern_scince_section_object = {
    title: "علوم معاصرة",
    description: "يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان الكتاب المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة تُظهر بُطلان هذه الإدعاءات.  تشتمل هذه الفئة على مجموعة المقالات والدراسات التي تتعامل مع العلوم المعاصرة،كما هو الحال بالنسبة لأبحاث الفضاء، والأبحاث الخاصة بالكائنات الحية، وعلم الوراثة والجينات.",
    link: "/creation/modern-scince",
    articles: modern_scince_articles,
    reversed: false,
  }
  return (
    <main className="page-main uni-text-color" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <h1>قضية الخلق</h1>
            <p id="page-heading" className="sr-only">قضية الخلق</p>
            <p>
              إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!
            </p>
            <p>
              ابدأ الآن واطلب المساعدة.
            </p>
            <Link href={`/contact`} className="section-link"><span>اتصل بنا الآن ... </span></Link>
          </header>
        </section>
        <SectionWithSlider sectionObject={biblical_world_section_object} />
        <SectionWithSlider sectionObject={creation_gospel_section_object} />
        <SectionWithSlider sectionObject={dino_section_object} />
        <SectionWithSlider sectionObject={evolution_ethics_section_object} />
        <SectionWithSlider sectionObject={modern_scince_section_object} />
      </div>
    </main>
  );
}