import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";
export default function ObjectionsSection() {
  const creation_section_object = {
    title: "ردود على الشبهات",
    description: "نقدم لكم هذه السلسلة من المقاطع المصورة نظرة عامة على الآيات التي يتم طرح شبهات حولها، بالإضافة إلى تحليل منطقي لما يُعتقد بأنَّه تناقض بين الآيات وذلك بالإعتماد على علم المنطق.",
    link: "/objections",
    articles: getArticlesByCategory("تناقضات"),
    reversed: false,
  }
  return (
    <section id="objections-section">
      <SectionWithSlider sectionObject={creation_section_object} />
    </section>
  );
}