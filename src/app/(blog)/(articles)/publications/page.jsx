import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";
import PublicationsMainPageemePageMetadata from "@/assets/blog/metadata/publicatoins-main-page";

export const metadata = PublicationsMainPageemePageMetadata();
export default function PublicationsMainPage() {
  const books_section_object = {
    title: "الكتب المُترجمة",
    description: "نقدم إليكم نخبة من الكتب والكُتيّبات المترجمة من اللغة الإنكليزية، والتي تتعامل مع مواضيع مختلفة ومهمة مثل قضيّة الأصول وقضية التعامل مع سفر التكوين والكتاب المقدس.",
    link: "/publications/books",
    articles: getArticlesByCategory("كتب"),
    reversed: false,
  }
  const cults_section_object = {
    title: "الديانات والطوائف",
    description: "هذه السلسلة هي مجموعة من دراسات تتعامل مع الديانات والطوائف العالمية من منظور إيمانيّ مسيحيّ.",
    link: "/publications/cults",
    articles: getArticlesByCategory("الديانات-والطوائف"),
    reversed: true,
  }
  const studies_section_object = {
    title: "دراسات كتابية",
    description: "نقدم إليكم مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على مؤلفات لنخبة من اللاهوتيين المُحافظين.",
    link: "/publications/studies",
    articles: getArticlesByCategory("دراسات-عامّة"),
    reversed: false,
  }

  return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header >
              <h1>منشورات

              </h1>
              <p id="page-heading" className="sr-only">منشورات
              </p>
              <p>
                نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من المراجع الموثَّقة والموثوقة.
              </p>
            </header>
          </section>
          <SectionWithSlider sectionObject={books_section_object} />
          <SectionWithSlider sectionObject={cults_section_object} />
          <SectionWithSlider sectionObject={studies_section_object} />
        </div>
      </main>
    </>
  );
}