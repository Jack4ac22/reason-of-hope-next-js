import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function PublicationSectionMainPage(props) {
  return (
    <>
      {/* Publication section */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"publications-section"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={props.articles}
                id="publications-section-carousel"
                const
                baseUrl="publications"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>المنشورات</h3>
                <p className="h5">
                  نقدم لكم مجموعة من المنشورات التي عملنا على نقلها إلى اللغة
                  العربية. البعض من هذه الكُتب هي مترجمة بشكل مباشر من الأصل
                  الإنجليزي، والبعض الآخر هو عمل بحثي تم بالإعتماد على عدد من
                  المراجع الموثَّقة والموثوقة.{" "}
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
