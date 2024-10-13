import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";

export default function PublicationsSection() {
  const creation_section_object = {
    title: "المنشورات",
    description: "نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من المراجع الموثَّقة والموثوقة.",
    link: "/publications",
    articles: getArticlesByCategory("إصدارات"),
    reversed: false,
  }
  return (
    <section id="publications-section">
      <SectionWithSlider sectionObject={creation_section_object} />
    </section>
  );
}