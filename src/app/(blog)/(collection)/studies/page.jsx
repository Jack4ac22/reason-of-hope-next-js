import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import BiblicalStudiesPageMetadata from "@/assets/blog/metadata/biblical-studies";

export const metadata = BiblicalStudiesPageMetadata;
export default function ChristianStudiesPage() {
  const articles = getArticlesByCategory("دراسات-كتابية");

  return (
    <>
      <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="Biblical Studies">
        <div className="page-main-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">Biblical Study</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1 >
              دراسات كتابية
            </h1>
            <p>مجموعة من الدراسات التي تتناول عدداً من المواضيع المرتبطة بالكتاب المقدس. وتهدف هذه الدراسات إلى مناقشة عدد من المواضيع الحياتية الإيمانية من خلال النظر إليها باستخدام عدسة الكتاب المقدس، والهدف: تحفيز القارئ لإعادة النظر في بعض الممارسات أو تقييم بعض المعتقدات لرفض الخاطئ منها والتيقن من السليم.</p>
          </section>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>

  );
}