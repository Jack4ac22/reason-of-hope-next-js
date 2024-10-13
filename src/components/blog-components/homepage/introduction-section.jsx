import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="text-right flex-col px-8 text-lg md:text-xl lg:text-2xl uni-text-color">
      <p>نحن مسيحيّون مؤمنون بأنَّ كُلَّ الكتاب المقدس هو كلمة الله وقادر على أن يجعل الإنسان حكيماً لبلوغ الخلاص عن طريق الإيمان في المسيح يسوع. كُلُّ الكتاب هو مُوحى به من الله وهو مصدر السلطان المعصوم عن الخطأ لجميع التعاليم المُلزمة على كلّ مؤمن.</p>
      <p>إن رجاءنا بالخلاص هو بنعمة الله (وحدها) بالإيمان (وحده) بالمسيح (وحده) من خلال الكتاب المقدس (وحده) لمجد الله (وحده).</p>
      <p><Link href="/about" className="info-link-button"> تعرّف علينا </Link> و <Link href="our-faith" className="info-link-button"> على إيماننا </Link> أو <Link href="/contact" className="info-link-button">اتصل بنا</Link>.</p>
    </section>);
}