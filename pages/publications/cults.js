import { getArticlesByCategory } from "../../utilities/articles-functions";
import PublicationsPagesList from "../../components/pulications-components/publications-pages-list/publications-pages-list";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import PageTitle from "../../components/general-compenents/page-title";
export default function Cults(props) {
  const cults_articles = props.cults_articles;
  const description =
    "هذه السلسلة هي مجموعة من دراسات تتعامل مع الديانات والطوائف العالمية من منظور إيمانيّ مسيحيّ.";
  const coverImage = "/blog_images/cults-religions-cover.jpg";
  return (
    <>
      <PageTitle
        title="الديانات والطوائف"
        description={description}
        image={coverImage}
      />
      <PublicationsPagesList />
      <section>
        <p className="h4">
          هذه السلسلة هي مجموعة من دراسات تتعامل مع الديانات والطوائف العالمية
          من منظور إيمانيّ مسيحيّ.
        </p>
        <p className="h4">
          ليس هدف هذه السلسلة تقديم أمر جديدٍ بالكامل، وذلك نتيجةً لوجود العديد
          من الدراسات المختلفة التي قامت بتقديم معلومات مشابهة لما يتم تقديمه في
          هذه السلسلة. إلا أن الهدف هو تقديم هذه المعلومات ضمن قالب جديد وتنسيق
          يُظهِرُ الإختلافات الجوهرية والخطرة بين المُعتقدات العالمية وبين
          الإيمان المسيحيّ المبني على إعلانات الله التي في الكتاب المقدس.
        </p>
        <p className="h4">
          تم الإعتماد في هذه السلسلة على عدد كبير من المراجع المختلفة في محاولة
          للوصول إلى أدق التعريفات الممكنة للعديد من المصطلحات غير المُعرَّبة،
          ولذلك فإنه قد تمَّ إرفاق الإسم اللاتيني أو اليوناني في بعض الأحيان
          لمساعدة القارئ في البحث باستخدام مصادر إضافية.
        </p>
        <p className="h4">
          إن هذه الدراسة تهدف إلى مساعدة الأخوات والأخوة المؤمنين على التنبه إلى
          الكثير من العادات والممارسات التي ربما تكون قد تسلَّلَت إلى حياتهم
          اليومية وعبادتهم، وبالتالي التخلّص من جميع الأُمور الدخيلة على الإيمان
          المبنيِّ على تعليم الكتاب المقدس الذي يُشكِّل المصدر الوحيد المعصوم
          لحياتنا في الإيمان وتعاملنا مع الربّ الإله. على الرَّغم من أنَّ البعض
          من الأشخاص قد يشعرون بالتحديّ نتيجةً لانتقاد بعض الممارسات التي ربما
          يعتقدون بأنها كتابية أو سليمة، إلا أنَّ الدعوة موجّهة إلى الجميع لكي
          يقوموا بوضع التقاليد والعادات والممارسات تحت مجهر الكتاب المقدس لفحصها
          وفق المعايير الإلهية، لرفض كلُّ ما هو غريب والتمسّك بما هو سليم
          ومُقَدَّس.
        </p>
        <p className="h4">
          من المُمكن أن يتم استخدام العديد من المعلومات ضمن الدفاعيات المسيحية
          عن الإيمان، إلا أنَّ الدفاعيات ليست هي الهدف المُرتجى من هذا العمل،
          فالهدف الأساسيّ هو التعليم عن الإيمان المسيحي من خلال تقديمه ضمن
          مقارنة لإظهار التباين الذي يسعى الكثير من الأشخاص إلى طمسه من خلال
          إساءة تقديم المعلومات أو سردها بطريقة غير مدروسة أو غير أمينة.
        </p>
      </section>
      <section className="mt-5">
        <ArticleCardsList articles={cults_articles} baseUrl="/publications" />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const cults_articles = getArticlesByCategory(
    "الديانات-والطوائف",
    "/content/publications"
  );

  return {
    props: {
      cults_articles: cults_articles,
    },
  };
}
