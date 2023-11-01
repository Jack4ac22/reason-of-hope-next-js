import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function BiblicalWorldSection(props) {
  const articlesByCategoryBiblicalWorld = props.articlesByCategoryBiblicalWorld;
  return (
    <>
      {/* العالم التوراتي */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"biblical-world"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryBiblicalWorld}
                id="biblical-world"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>العالم التوراتي</h3>
                <p className="h5">
                  يتلقى سفر التكوين عامةً، وسرد الطوفان خاصةًّ، حصّة الأسد من
                  النقد الموجَّه إلى الكتاب المقدس. تتضمن هذه الفئة مجموعة
                  المقالات والدراسات المرتبطة بالتاريخ المسجل في الكتاب المقدس،
                  بالإضافة إلى الدراسات المرتبطة بقضية طوفان سفر التكوين وفلك
                  نوح.
                </p>
                <p className="h5">
                  سيتم إرفاق الموضوعات المرتبطة بالمواقع الجغرافية وسواها مع هذه
                  المجموعة.
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
