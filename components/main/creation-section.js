import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function CreationSectionMainPage(props) {
  return (
    <>
      {/* Creation Issue */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"creation-section"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={props.articles}
                id="creation-section-carousel"
                const
                baseUrl="creation"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>قضية الخلق</h3>
                <p className="h5">
                  إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام
                  الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!
                </p>
                <Link href="/creation" className=" h4 btn btn-info m-5">
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
