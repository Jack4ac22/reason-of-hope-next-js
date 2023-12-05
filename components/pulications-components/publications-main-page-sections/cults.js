import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function PublicationsCults(props) {
  const cults_articles = props.cults_articles;
  return (
    <>
      {/* الكتب المُترجمة */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"publications-cults-sections"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={cults_articles}
                id="publications-cults-sections"
                const
                baseUrl="publications"
                isBook={true}
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>سلسلة الديانات والطوائف</h3>
                <p className="h5">
                  نقدم إليكم مجموعة من الدراسات التي تتناول الديانات العالمية من
                  خلال مقارنتها بالإيمان المسيحي الكتابي.
                </p>
                <Link
                  href="/publications/cults"
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
