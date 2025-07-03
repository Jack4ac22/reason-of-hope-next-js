// /src/app/page.jsx
import IntroductionSection from "@/components/blog-components/homepage/introduction-section";
import FeaturedArticles from "@/components/blog-components/homepage/featured-articles";
import SubjectsSection from "@/components/blog-components/homepage/subjects-section";
import PublicationsSection from "@/components/blog-components/homepage/publications-section";
import CreationSection from "@/components/blog-components/homepage/creation-section";
import ObjectionsSection from "@/components/blog-components/homepage/objections-section";
import { getArticleFromParams } from "@/utils/blog/articles-functions";
import { redirect } from "next/navigation";

// ToCheck the revalidation in nextjs 13
export const revalidate = 60

export default function Home({ searchParams }) {
  const postId = searchParams?.p;
  if (postId) {
    const match = getArticleFromParams({ searchParams: { p: postId } });
    if (match) {
      redirect(`/${match.directory}/${match.slug}`);
    }
  }
  return (
    <>
      <main className="page-main" aria-label="Our Faith Page">
        <div className="page-layer-container">
          <header className="page-header uni-text-color">
            <h1>أهلاً بكم</h1>
          </header>
          <section className="max-w-2xl h-full mx-4" aria-labelledby="article-heading">
            <h1 id="article-heading" className="sr-only">Welcome page</h1>
          </section>
          <IntroductionSection />
          <FeaturedArticles />
          <SubjectsSection />
          <PublicationsSection />
          <CreationSection />
          <ObjectionsSection />
        </div>
      </main>
    </>
  );
}
