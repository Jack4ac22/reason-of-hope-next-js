import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionSectoinFivemePageMetadata from "@/assets/blog/metadata/objections-section-5-page";

export const metadata = ObjectionSectoinFivemePageMetadata();

export default function ObjectionsSectionFivePage() {
  const articles = getArticlesByCategory("إختلافات-التفاصيل");
  return (
    <main className="page-main uni-text-color" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
<header >            <h1>القسم الخامس: الإختلافات في التفاصيل
            </h1>
            <p id="page-heading" className="sr-only">القسم الخامس: الإختلافات في التفاصيل
            </p>
            <p>
              نجد في البعض من آيات الكتاب المقدس بعض التفاصيل التي تعطي الانطباع بأنها غير متوافقة مع التفاصيل التي تقدمها آيات آُخرى تتعامل مع ذات الموضوع. ويكون الأمر الغالب هو أن النُّقاد يشيرون إلى الاختلافات في الطرق التي يقوم بها كُتَّاب الأناجيل بتسجيل الأحداث، والأمر الأكيد أنَّه يوجد اختلافات من هذا النوع. لكن السؤال هو: هل هي تناقضات أم أنها اختلافات متوافقة؟
            </p>
            <p>
              لا يوجد أي خطأ في أن يقوم أحد الأشخاص بتدوين أن الحادثة قد وقعت بعد شروق الشمس في الوقت الذي يقوم شخص آخر بتسجيل الحادثة على أنها وقعت في الصباح. على الرغم من أن الصياغة مختلفة بين السردين السابقين إلا أنهما ليسا متناقضين، والطبيعة البشرية تلعب دوراً هاماً في مثل هذا النوع من الإدعاءات، ذلك أنها تدفع القارئ إلى أن يقوم باستخدام مخيلته في استحضار المعلومات التي لا يقدمها النص، مثل الأماكن التي كان يقف فيها الأشخاص، عدد الأشخاص الذين كانوا حاضرين دون أن يذكرهم النص، أو الوقت الدقيق لوقوع الأحداث وذلك على الرغم من عدم وجود هذه التفاصيل في النص. الأمر الغالب هو أن التناقضات ستكون في مخيلة القارئ وليس لها وجود في الآيات التي يقوم بنقدها.
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
  );
}