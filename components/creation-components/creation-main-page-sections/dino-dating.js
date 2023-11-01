import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function DinoDatingSection(props) {
  const articlesByCategoryDino = props.articlesByCategoryDino;
  return (
    <>
      {/* الديناصورات والتأريخ */}
      <section className="rounded-4 border border-5 mt-3" key={"dino-dating"}>
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryDino}
                id="dino-dating"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>الديناصورات والتأريخ</h3>
                <p className="h5">
                  يتم استخدام الديناصورات كأداة لنقد التاريخ التوراتي، وذلك بعد
                  أن يتم تأريخها إلى عدة ملايين من السنوات.
                </p>
                <p className="h5">
                  تشتمل هذه الفئة على الدراسات المختصة بالديناصورات وتوافقها مع
                  الكتاب المقدس، بالإضافة إلى الدراسات الخاصة بنظريات التأريخ
                  المستخدمة في النظام العلماني.
                </p>
                <p className="h5">
                  سيضاف إليها جميع الدراسات المختصة بالمستحاثات.
                </p>

                <Link
                  href="/creation/creation-gospel"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ مقالات هذه الفئة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
