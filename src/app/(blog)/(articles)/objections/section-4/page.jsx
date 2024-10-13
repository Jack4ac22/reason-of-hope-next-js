import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import { Suspense } from "react";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CardsListSkeleton from "@/components/blog-components/skeltons/card-list-skelton";
import ObjectionsSectionFourPageMetadata from "@/assets/blog/metadata/objections-section-4-page";

export const metadata = ObjectionsSectionFourPageMetadata();
export default function ObjectionsSectionFourPage() {
  const articles = getArticlesByCategory("العلاقة-السببية");
  return (
    <main className="page-main uni-text-color" aria-label="Devotions">
      <div className="page-layer-container">
        <section aria-labelledby="article-heading">
<header >            <h1>القسم الرابع: الإختلافات بين المُسَبِّبْ والنَّاتِج
            </h1>
            <p id="page-heading" className="sr-only">القسم الرابع: الإختلافات بين المُسَبِّبْ والنَّاتِج
            </p>
            <p>
              سوف نقوم في هذا القسم بفحص الإدعاءات التي يتم تقديمها بأن الكتاب المقدس يناقض نفسه فيما يختص بالمسببات – أي: مَنْ الشخص أو ما الأمْرُ الذي تسبب بوقوع أحداث معيّنة؟ ونجد أنه يتم تقديم إحدى الآيات على أنها تُقَدِّمُ مُسبِّباً معيناً في الوقت الذي تُقدِّم آية أُخرى مُسبِّباً آخر، فأيٌّ منهما هو الصحيح؟
            </p>
            <p>
              إن المُسبِّبات تكون في معظم الحالات متعددة الأوجه، ومعظم الأحداث تمتلك مُسبِّبات متعدِّدة؛ وبالتالي فإنه من الممكن أن نجد آيتين مختلفتين تقومان بتقديم مُسبِّبين صحيحين دون وجود أي تناقض.
            </p>
            <p>
              على سبيل المثال، مالذي يتسبب بهطول الأمطار؟ هل هي رطوبة الهواء، أم انخفاض درجة حرارة الهواء إلى مادون نقطة التندِّي، أم وجود جبهة هوائية باردة، أم الجاذبية التي تقوم بجذب قطرات المطر، أم قوى الطبيعة، أم الله؟
            </p>
            <p>
              إن جميع الأمور التي سبق ذكرها هي مُسبِّبات لهطول الأمطار، ولا يوجد أي تناقض فيما بينها، إنما هي مختلفة بشكل متوافق. ويعتبر الأمر ارتكاباً لمغالطة التشعب في حال تم الإفتراض بأن حادثة معينة أو نتيجة معينة تمتلك مُسَبِّبَاً واحداً فقط. إضافةً إلى ذلك، فإنه لمجرد أن حادثتين قد وقعتا في وقت واحد فإن هذا لن يعني بالضرورة بأن إحداهما قد تسبَّبت بالأُخرى، وهذا ما يعرف بمغالطة المُسبِّبات الخاطئة. إنَّ هذه الأخطاء في التفكير المنطقي هي ما يقف وراء الكثير من الأخطاء النقدية التي يرتكبها النُقّاد في اعتراضاتهم المقدمة والتي سوف يتم التعامل معها في هذا القسم
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