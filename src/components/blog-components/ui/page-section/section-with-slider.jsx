import CardSlider from "@/components/blog-components/ui/sliders/cards-slider";
import Link from "next/link";
import { Suspense } from 'react'
import ArticleCardSkeleton from "@/components/blog-components/skeltons/article-card-skelton";
export default function SectionWithSlider({ sectionObject }) {
  return (
    <section className="uni-text-color mt-6" id={sectionObject?.title?.replace(/\s+/g, '')}>
      <div className={`mx-2 flex flex-col ${sectionObject.reversed ? " md:flex-row-reverse " : " md:flex-row "}  md:justify-between`}>

        <div className="flex-col md:w-1/2 w-full px-8 md:h-fill text-lg md:text-xl lg:text-2xl">
          <h2 className="text-2xl font-extrabold my-4">{sectionObject.title}</h2>
          <p className="my-3">{sectionObject.description}</p>
          <Link href={sectionObject.link} className="section-link"><span>{sectionObject.linkText || "انتقل إلى الصفحة الخاصة بهذا القسم"}</span></Link>
        </div>

        <div className="mt-4 md:mt-0 md:w-1/2 w-full flex justify-center">
          <Suspense fallback={<ArticleCardSkeleton />} >
            <CardSlider articles={sectionObject.articles} />
          </Suspense>
        </div>

      </div>
    </section>
  );
}