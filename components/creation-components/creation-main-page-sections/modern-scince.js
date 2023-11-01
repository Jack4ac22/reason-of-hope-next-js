import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function ModernScinceSection(props) {
  const articlesByCategoryModernScince = props.articlesByCategoryModernScince;
  return (
    <>
      {/* علوم معاصرة */}
      <section className="rounded-4 border border-5 mt-3" key={"modern-scince"}>
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryModernScince}
                id="modern-scince"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>علوم معاصرة</h3>
                <p className="h5">
                  يعتقد البعض من الأشخاص أن العلوم المعاصرة قد أثبتت بطلان
                  الكتاب المقدس، إلا أن الدراسات التي سيتم عرضها ضمن هذه الفئة
                  تُظهر بُطلان هذه الإدعاءات.
                </p>
                <p className="h5">
                  تشتمل هذه الفئة على مجموعة المقالات والدراسات التي تتعامل مع
                  العلوم المعاصرة،كما هو الحال بالنسبة لأبحاث الفضاء، والأبحاث
                  الخاصة بالكائنات الحية، وعلم الوراثة والجينات.
                </p>
                <Link
                  href="/creation/evolution-ethics"
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
