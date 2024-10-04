import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import WordsPageMetadata from "@/assets/blog/metadata/words";

export const metadata = WordsPageMetadata
export default function WordsPage() {
  const articles = getArticlesByCategory("كلمة-ورسالة");
  return (
    <main className="page-main" aria-label="Words Study">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
          <header>
            <p id="page-heading" className="sr-only">Words Study</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1 >
            كلمة ورسالة
          </h1>
          <p>مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر.</p>
        </section>
        <section>
          <Suspense fallback={<CardsListSkeleton />}>
            <CardList articles={articles} />
          </Suspense>
        </section>
      </div>
    </main>)

}