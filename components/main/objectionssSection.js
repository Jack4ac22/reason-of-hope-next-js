import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function ObjectionsSectionMainPage(props) {
  return (
    <>
      {/* Objections section */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"objections-section"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={props.articles}
                id="objection-section-carousel"
                const
                baseUrl="creation"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>الإعتراضات</h3>
                <p className="h5">
                  تقدم لكم هذه السلسلة من المقاطع المصورة نظرة عامة على هذه
                  الآيات بالإضافة إلى تحليل منطقي لما يُعتقد بأنَّه تناقض بين
                  الآيات وذلك بالإعتماد على علم المنطق.
                </p>
                <Link href="/publications" className=" h4 btn btn-info m-5">
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
