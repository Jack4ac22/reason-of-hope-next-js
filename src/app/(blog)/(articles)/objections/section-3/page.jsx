import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionThreePageMetadata from "@/assets/blog/metadata/objections-section-3-page";

export const metadata = ObjectionsSectionThreePageMetadata();
export default function ObjectionsSectionThreePage() {
  const articles = getArticlesByCategory("توقيت-الأحداث");
  return (
    <main className="page-main uni-text-color" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
<header >            <h1>القسم الثالث: الإختلافات في توقيت الأحداث
            </h1>
            <p id="page-heading" className="sr-only">القسم الثالث: الإختلافات في توقيت الأحداث
            </p>
            <p>
              يتم في الكثير من الأحيان تقديم تصريحات تفيد بأن الكتاب المُقدَّس يناقض نفسه فيما يتعلق بتوقيت الأحداث التاريخية التي ينقلها لنا. فلنفترض أن إحدى آيات الكتاب المُقدَّس تقول بأن الحدث (أ) قد وقع قبل الحدث (ب)، و في الوقت عينه توجد آية أُخرى تُصرَّح بأن الحدث (ب) قد وقع أولاً، ألن يتسبب هذا الأمر مشكلة؟
            </p>
            <p>
              إنَّ معظم الحالات التي سنتناولها في هذا القسم ستعكس لنا كيف أن القارئ قام بافتراض ترتيبٍ شخصيٍّ لوقوع الأحداث في الوقت الذي لم تصرح فيه الآيات بترتيب وقوع الأحداث. العديد من التناقضات المزعومة المُدرجة في هذا القسم سيتم دحضها من خلال قراءة الآيات بطريقة أمينة ودون تقديم افتراضات مسبقةٍ لا يوجد لها مبرّر كافٍ.
            </p>
          </header>
        </section>
        <section>
          <Suspense fallback={<CardsListSkeleton />}>
            <CardList articles={articles} />
          </Suspense>
        </section>
      </div>
    </main >
  );
}