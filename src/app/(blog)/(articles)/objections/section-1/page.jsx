import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionOnePagePageMetadata from "@/assets/blog/metadata/objections-section-1-page";

export const metadata = ObjectionsSectionOnePagePageMetadata();

export default function ObjectionsSectionOnePage() {
  const articles = getArticlesByCategory("الإختلافات-الكمية-والعددية");
  return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header >
              <h1>
                القسم الأول: الإختلافات الكمية أو العددية
              </h1>
              <p id="page-heading" className="sr-only">القسم الأول: الإختلافات الكمية أو العددية
              </p>
              <p>
                يتناول هذا القسم الإدعاءات القائلة بأنه يوجد تناقض بين تصريحات آيات الكتاب المقدس عن تعداد بعض الأمور المختلفة.
              </p>
              <p>
                وهنا يجدر بنا التنبه إلى أن وجود تناقض بين الآيات يتطلب أن تكون التصريحات تُقدِّم معلومات متناقضةً حقاً.
              </p>
              <p>
                على سبيل المثال، إن صرَّحت إحدى الآيات بأن ثلاثة أشخاص فقط كانوا موجودين وحاضرين في المكان والزمان عينه الذي تصفه آية أُخرى وتقول بوجود أربعة أشخاص على الأقل في ذات الزمان والمكان وفي ذات الواقعة (أي ذات السياق وذات المعنى)؛ فإنَّ الآيتان من هذا النوع ستكونان متناقضتان.
              </p>
              <p>
                إن كلمتي ”فقط“ و”على الأقل“ تمتلكان أهمية كبيرة في إثبات وجود تناقض بين الآيات، إذ أنَّ الإفتراض بأنَّ ”ثلاثة أشخاص“ تحمل ذات معنة ”ثلاثة أشخاص فقط“ دون وجود مُبرّرٍ كافٍ من السياق النصي للآية إنما هو ارتكاب لخطأ منطقي يُعرف بإسم مُغالطة الفروع. وهذا هو واقع الحال في العدد الأكبر من الإدعاءات التالية.
              </p>
            </header>
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