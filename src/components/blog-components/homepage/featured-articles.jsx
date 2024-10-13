import { getAllArticlesData } from "@/utils/blog/articles-functions";
import Link from "next/link";
import SectionWithSlider from "@/components/blog-components/ui/page-section/section-with-slider";

export default function FeaturedArticles() {

  const articles = getAllArticlesData(true);

  const featuredArticles = process.env.NEXT_PUBLIC_FEATURED_ARTICLES ? process.env.NEXT_PUBLIC_FEATURED_ARTICLES.split(',').map((article) => article.trim()) : [];

  let featuredArticlesList = [];
  featuredArticlesList = articles.filter((article) => featuredArticles.includes(article.slug));

  if (featuredArticlesList.length === 0) {
    featuredArticlesList = articles
  }

  const featured_articles_object = {
    title: "منشورات مُميزة",
    description: "إليكم مجموعة من المنشورات التي قمنا باختيارها لكم.",
    link: "/all",
    linkText: "الإنتقال إلى صفحة جميع المنشورات",
    articles: featuredArticlesList,
    reversed: false,
  }

  return (
    <section id="featured-articles" className="mt-4 flex-col md:flex-row text-right px-8">
      <SectionWithSlider sectionObject={featured_articles_object} />
    </section>
  );
}