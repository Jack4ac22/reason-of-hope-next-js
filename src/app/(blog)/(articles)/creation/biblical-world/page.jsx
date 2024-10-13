import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import BiblicalWorldPageMetadata from "@/assets/blog/metadata/biblical-world";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import{Suspense}from"react";

export const metadata = BiblicalWorldPageMetadata;
export default function BiblicalWorldPage() {
  const articles = getArticlesByCategory("العالم-التوراتي");
  return (
    <>
      <main className="page-main" aria-label="Biblical World">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">Biblical World</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1>
              العالم التوراتي
            </h1>
            <p>
              يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من النقد الموجَّه إلى الكتاب المقدس. ويُعتبر الكثيرون أن سفر التكوين ليس سوى خرافة قديمة، وأن سرد الطوفان لا يمكن أن يكون حقيقيًا. ولكن هل يمكن أن يكون سرد الطوفان حقيقيًا؟ وهل يمكن أن يكون سفر التكوين موثوقًا؟ وهل يمكن أن يكون لهذه القصة أي تأثير على حياتنا اليومية؟
            </p>
            <p>
              تتضمن هذه الفئة مجموعة المقالات والدراسات المرتبطة بالتاريخ المسجل في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه المجموعة.</p>
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