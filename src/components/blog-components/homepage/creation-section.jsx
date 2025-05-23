import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";

export default function CreationSection() {
  const creation_section_object = {
    title: "قضية الخلق",
    description: "إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!",
    link: "/creation",
    articles: getArticlesByCategory("قضيّة-الخلق"),
    reversed: true,
  }
  return (
    <section id="creation-section">
      <SectionWithSlider sectionObject={creation_section_object} />
    </section>
  );
}