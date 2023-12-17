import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);
  // find the date pattern in the path the date is with this pattern /yyyy/mm/dd
  // the path is what follow the date pattern, if there is no date pattern the path is the whole path
  const path = asPath.match(/\/\d{4}\/\d{2}\/\d{2}\/(.*)/);

  return (
    <>
      <div className="container">
        <h1>هذه الصفحة غير متوفرة</h1>
        <p>
          إن التحديث الذي قمنا به مؤخراً لتحسين العرض وسرعة الإستجابة بالإضافة
          إلى تغيير المُضيف، قد تسبب ببعض المشاكل التقنية.
        </p>
        <p>الرجاء قم تصفح موقعنا الجديد للوصول إلى المنشور المطلوب.</p>
        <p>شكراً لتفهمكم.</p>
        <p>الصفحة المطلوبة: </p>
        <Link className="btn btn-primary" href="/contact">
          اتصل بنا
        </Link>
      </div>
    </>
  );
}
