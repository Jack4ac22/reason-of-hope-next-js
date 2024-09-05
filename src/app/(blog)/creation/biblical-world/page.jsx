import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import BiblicalWorldPageMetadata from "@/assets/blog/metadata/biblical-world";

export const metadata = BiblicalWorldPageMetadata;
export default function BiblicalWorldPage() {
  const articles = getArticlesByCategory("العالم-التوراتي");
  return (
    <>
      <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="Biblical World">
        <div className="page-main-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">Biblical World</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1 >
              العالم التوراتي
            </h1>
            <p>
              يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من النقد الموجَّه إلى الكتاب المقدس. ويُعتبر الكثيرون أن سفر التكوين ليس سوى خرافة قديمة، وأن سرد الطوفان لا يمكن أن يكون حقيقيًا. ولكن هل يمكن أن يكون سرد الطوفان حقيقيًا؟ وهل يمكن أن يكون سفر التكوين موثوقًا؟ وهل يمكن أن يكون لهذه القصة أي تأثير على حياتنا اليومية؟
            </p>
            <p>
              تتضمن هذه الفئة مجموعة المقالات والدراسات المرتبطة بالتاريخ المسجل في الكتاب المقدس، بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك نوح. سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه المجموعة.</p>
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