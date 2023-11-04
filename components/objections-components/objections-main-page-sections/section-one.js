import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function ObjectionsPageSectionOne(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الأول*/}
      <section className=" mt-3" key={"objections-section-one"}>
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articles}
                id="objections-section-one"
                baseUrl={"objections"}
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>القسم الأول: الإختلافات الكمية أو العددية</h3>
                <p className="h5">
                  سوف نتعامل في هذا القسم مع الإدعاءات القائلة بأنه يوجد تناقض
                  بين تصريحات آيات الكتاب المقدس عم تعداد بعض الأمور المختلفة.
                  وهنا يجدر بنا التنبه إلى أن وجود تناقض بين الآيات يتطلب أن
                  تكون التصريحات تُقدِّم معلومات متناقضةً حقاً.
                </p>
                <p className="h5">
                  على سبيل المثال، إن صرَّحت إحدى الآيات بأن ثلاثة أشخاص فقط
                  كانوا موجودين وحاضرين في المكان والزمان عينه الذي تصفه آية
                  أُخرى وتقول بوجود أربعة أشخاص على الأقل في ذات الزمان والمكان
                  وفي ذات الواقعة (أي ذات السياق وذات المعنى)؛ فإنَّ الآيتان من
                  هذا النوع ستكونان متناقضتان.
                </p>

                <Link
                  href="/objections/section-1"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ مقالات هذا القسم
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
