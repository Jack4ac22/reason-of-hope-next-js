import Image from "next/image";
import Link from "next/link";
export default function ObjectionsPageSectionOne(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الأول*/}
      <section key="main-section-one" className="mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 aspect-ratio-1x1">
              <figure className="rounded mx-auto d-block ">
                <Image
                  alt="cover image for the section one of the objections page"
                  className="rounded mx-auto d-block img-fluid "
                  src={"/blogImages/pexels-photo-6623835.jpeg"}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                {/* <figcaption className="figure-caption text-center mt-1">
                  الكتاب المقدس هو مصدر موثوق للحقيقة المطلقة لأنَّه كلمة الله.
                  <Link href="/our-faith" className=" h4 btn btn-sm btn-info ">
                    اقرأ بيان إيماننا
                  </Link>
                </figcaption> */}
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                يتناول هذا القسم الإدعاءات القائلة بأنه يوجد تناقض بين تصريحات
                آيات الكتاب المقدس عن تعداد بعض الأمور المختلفة.
              </p>
              <p className="h4">
                وهنا يجدر بنا التنبه إلى أن وجود تناقض بين الآيات يتطلب أن تكون
                التصريحات تُقدِّم معلومات متناقضةً حقاً.
              </p>
              <p className="h4">
                على سبيل المثال، إن صرَّحت إحدى الآيات بأن ثلاثة أشخاص فقط كانوا
                موجودين وحاضرين في المكان والزمان عينه الذي تصفه آية أُخرى وتقول
                بوجود أربعة أشخاص على الأقل في ذات الزمان والمكان وفي ذات
                الواقعة (أي ذات السياق وذات المعنى)؛ فإنَّ الآيتان من هذا النوع
                ستكونان متناقضتان.
              </p>
              <p className="h4">
                إن كلمتي ”فقط“ و”على الأقل“ تمتلكان أهمية كبيرة في إثبات وجود
                تناقض بين الآيات، إذ أنَّ الإفتراض بأنَّ ”ثلاثة أشخاص“ تحمل ذات
                معنة ”ثلاثة أشخاص فقط“ دون وجود مُبرّرٍ كافٍ من السياق النصي
                للآية إنما هو ارتكاب لخطأ منطقي يُعرف بإسم مُغالطة الفروع. وهذا
                هو واقع الحال في العدد الأكبر من الإدعاءات التالية.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
