import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function PublicationsStudies(props) {
  const studies_articles = props.studies_articles;
  return (
    <>
      {/* دراسات متنوعة */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"publications-studies-sections"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-around">
            <div className="col-md-3">
              <AutoplayingCarousel
                articles={studies_articles}
                id="publications-studies-sections"
                const
                baseUrl="publications"
                isBook={true}
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>دراسات متنوعة</h3>
                <p className="h5">
                  نقدم إليكم مجموعة من الدراسات التي قمنا بإعدادها بالإعتماد على
                  مؤلفات لنخبة من اللاهوتيين المُحافظين.
                </p>

                <Link
                  href="/publications/studies"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ كتب هذه الفئة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
