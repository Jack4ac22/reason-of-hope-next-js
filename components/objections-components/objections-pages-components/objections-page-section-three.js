import Image from "next/image";
import Link from "next/link";
export default function ObjectionsPageSectionThree(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الثالث*/}
      <section key="main-section-three" className="mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <figure className="rounded mx-auto d-block">
                <Image
                  alt="cover image for the section three of the objections page"
                  className="rounded mx-auto d-block img-fluid "
                  src={"/blog-images/pexels-photo-707676.jpeg"}
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
              يتم في الكثير من الأحيان تقديم تصريحات تفيد بأن الكتاب المُقدَّس يناقض نفسه فيما يتعلق بتوقيت الأحداث التاريخية التي ينقلها لنا. فلنفترض أن إحدى آيات الكتاب المُقدَّس تقول بأن الحدث (أ) قد وقع قبل الحدث (ب)، و في الوقت عينه توجد آية أُخرى تُصرَّح بأن الحدث (ب) قد وقع أولاً، ألن يتسبب هذا الأمر مشكلة؟
              </p>
              <p className="h4">
              إنَّ معظم الحالات التي سنتناولها في هذا القسم ستعكس لنا كيف أن القارئ قام بافتراض ترتيبٍ شخصيٍّ لوقوع الأحداث في الوقت الذي لم تصرح فيه الآيات بترتيب وقوع الأحداث. العديد من التناقضات المزعومة المُدرجة في هذا القسم سيتم دحضها من خلال قراءة الآيات بطريقة أمينة ودون تقديم افتراضات مسبقةٍ لا يوجد لها مبرّر كافٍ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
