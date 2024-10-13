import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex justify-center uni-text-color select-none">
      <div className="m-8 w-full md:max-w-2xl ">
        <section id="introduction">
          <h1 className="text-center">من نحن</h1>
          <p>
            نحن مسيحيّون مؤمنون بأنَّ كُلَّ الكتاب المقدس هو كلمة الله وقادر على أن يجعل الإنسان حكيماً لبلوغ الخلاص عن طريق الإيمان في المسيح يسوع. كُلُّ الكتاب هو مُوحى به من الله وهو مصدر السلطان المعصوم عن الخطأ لجميع التعاليم المُلزمة على كلّ مؤمن.
          </p>
          <p>
            إن رجاءنا بالخلاص هو بنعمة الله (وحدها) بالإيمان (وحده) بالمسيح (وحده) من خلال الكتاب المقدس (وحده) لمجد الله (وحده).
          </p>
        </section>
        <section id="vision">
          <h2 className="my-2 text-2xl font-bold uni-text-color">رؤيتنا</h2>
          <p>
            رؤيتنا هي أن الكتاب المقدس هو كامل الموثوقية وصالح لكل زمان ومكان، وبأن جميع الأشخاص أياً يكن مستواهم الثقافي، قادرون وبمساعدة الروح القدس على فهم أساسيات الإيمان والوصول إلى معرفة الحق الإلهي في أن الخلاص هو من خلال الفداء الذي قدمه ربنا ومخلصنا يسوع المسيح على خشبة الصليب، وبأنه لايوجد أي طريق - عدا عن الإيمان بالمسيح الفادي - يُؤدي إلى الحياة الأبدية.
          </p>
          <Link href={'/gospel'} className="info-link-button text-center w-full">اقرأ مُلخص رسالة الإنجيل الخلاصية.</Link>
        </section>
        <section id="team">
          <h2 className="my-2 text-2xl font-bold uni-text-color">فريق العمل</h2>
          <p>
            نحن فريق عمل مُتطوع مكون من مسيحيين يعملون بجد لنشر الكلمة الإلهية والتعليم المسيحي باللغة العربية.
          </p>
          <p>
            إننا نعمل بإيمان وثقة بأن الله سيُبارك عملنا وسيستخدمه لمجد اسمه ولنشر ملكوته.
          </p>
          <p>
            إننا ندعوكم للصلاة من أجلنا ومن أجل هذه الخدمة.
          </p>
          <h3 className="my-2 text-xl font-bold uni-text-color">الفريق:</h3>
          <ul>
            <li>
              جاك قازنجيان: مُحرِّر، مُترجم ومُبرمج.
            </li>
            <li>
              ميشيل مسعود: مُحرِّر ومُترجم ومُقَدِّم مُحتوى.
            </li>
          </ul>
        </section>
        <section id="contact">
          <p>
            إن كان لديك أي استفسار أو تعليق أو اقتراح، فلا تتردد في التواصل معنا:
            <Link href={'/contact'} className="info-link-button text-center w-full">اتصل بنا</Link>
          </p>
        </section>
      </div>
    </main>
  );
}