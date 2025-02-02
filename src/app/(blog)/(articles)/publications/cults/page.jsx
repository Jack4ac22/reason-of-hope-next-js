import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import CultsPageMetadata from "@/assets/blog/metadata/cults-main-page";

export const metadata = CultsPageMetadata();
export default function CultssPage() {
  const articles = getArticlesByCategory("الديانات-والطوائف");
  return (
    <>
      <main className="page-main uni-text-color" aria-label="Devotions">
        <div className="page-layer-container">
          <section aria-labelledby="article-heading">
            <header >
              <h1>
                الديانات والطوائف
              </h1>
              <p id="page-heading" className="sr-only">الديانات والطوائف
              </p>
              <p>
                هذه السلسلة هي مجموعة من دراسات تتعامل مع الديانات والطوائف العالمية من منظور إيمانيّ مسيحيّ.
              </p>
              <p>
                ليس هدف هذه السلسلة تقديم أمر جديدٍ بالكامل، وذلك نتيجةً لوجود العديد من الدراسات المختلفة التي قامت بتقديم معلومات مشابهة لما يتم تقديمه في هذه السلسلة. إلا أن الهدف هو تقديم هذه المعلومات ضمن قالب جديد وتنسيق يُظهِرُ الإختلافات الجوهرية والخطرة بين المُعتقدات العالمية وبين الإيمان المسيحيّ المبني على إعلانات الله التي في الكتاب المقدس.
              </p>
              <p>
                تم الإعتماد في هذه السلسلة على عدد كبير من المراجع المختلفة في محاولة للوصول إلى أدق التعريفات الممكنة للعديد من المصطلحات غير المُعرَّبة، ولذلك فإنه قد تمَّ إرفاق الإسم اللاتيني أو اليوناني في بعض الأحيان لمساعدة القارئ في البحث باستخدام مصادر إضافية.
              </p>
              <p>
                إن هذه الدراسة تهدف إلى مساعدة الأخوات والأخوة المؤمنين على التنبه إلى الكثير من العادات والممارسات التي ربما تكون قد تسلَّلَت إلى حياتهم اليومية وعبادتهم، وبالتالي التخلّص من جميع الأُمور الدخيلة على الإيمان المبنيِّ على تعليم الكتاب المقدس الذي يُشكِّل المصدر الوحيد المعصوم لحياتنا في الإيمان وتعاملنا مع الربّ الإله. على الرَّغم من أنَّ البعض من الأشخاص قد يشعرون بالتحديّ نتيجةً لانتقاد بعض الممارسات التي ربما يعتقدون بأنها كتابية أو سليمة، إلا أنَّ الدعوة موجّهة إلى الجميع لكي يقوموا بوضع التقاليد والعادات والممارسات تحت مجهر الكتاب المقدس لفحصها وفق المعايير الإلهية، لرفض كلُّ ما هو غريب والتمسّك بما هو سليم ومُقَدَّس.
              </p>
              <p>
                من المُمكن أن يتم استخدام العديد من المعلومات ضمن الدفاعيات المسيحية عن الإيمان، إلا أنَّ الدفاعيات ليست هي الهدف المُرتجى من هذا العمل، فالهدف الأساسيّ هو التعليم عن الإيمان المسيحي من خلال تقديمه ضمن مقارنة لإظهار التباين الذي يسعى الكثير من الأشخاص إلى طمسه من خلال إساءة تقديم المعلومات أو سردها بطريقة غير مدروسة أو غير أمينة.
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