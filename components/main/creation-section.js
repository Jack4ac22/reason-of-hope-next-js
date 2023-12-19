import Link from "next/link";
import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";

export default function CreationSectionMainPage(props) {
  return (
    <>
      <section key={"creation-section"}>
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
              <h3 className="display-4 fw-bold lh-1 text-body-emphasis">
                قضية الخلق
              </h3>
              <p className="lead">
                إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام
                الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!
              </p>
            </div>
            <div className="col-lg-5">
              <div class="container text-center">
                <div class="row"></div>
                <div className="col-lg-5" style={{ width: "25rem" }}>
                  <AutoplayingCarousel
                    articles={props.articles}
                    id="category_gospel"
                    baseUrl="creation"
                  />
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 my-2">
              <Link
                href="/creation"
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
