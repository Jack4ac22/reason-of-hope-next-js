import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import BiblicalStudiesPageMetadata from "@/assets/blog/metadata/biblical-studies";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";

export const metadata = BiblicalStudiesPageMetadata;
export default function ChristianStudiesPage() {
  const articles = getArticlesByCategory("دراسات-كتابية");

  return (
    <>
      <main className="page-main" aria-label="Biblical Studies">
        <div className="page-layer-container">
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
            <Suspense fallback={<CardsListSkeleton />}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>

  );
}