import Link from "next/link.js";
import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import YouTube, { YouTubeProps } from "react-youtube";

export default function TheGospelSectionMainPage() {
  const gospelDescription =
    "يجب علينا أن نكون متيقنين أن البشارة السارة التي هي سرّ رجاءنا وفرحنا هي تجسد وحياة وموت وقيامة وارتفاع يسوع المسيح. جميع هذه العناصر معاً تشكل البشارة السارة التي يجب أن نحيا وفقها. \n نحن جميعاً نمتلك الميل إلى الإنجراف خلف الخطابات العاطفية والمشاعر وما أريد وما أشعر ومالذي يناسبني. لكن كل هذا لا يعني أيّ شيء! لا يحمل أيَّ قيمة! البشارة السارة هي أن كلَّ شيء تمَّ ونحن يجب أن نحيا وفق هذه البشارة وأن نبتعد عن الإنتقائية \n الإنجيل الذي يتم تقديمه دون التوبة ودون الخطية ودون الإيمان ودون الصليب ودون الآلام ليس انجيلاً \n المسيح مات ولكن الأمر لم ينته هناك فهو قد قام أيضاً ";
  const opts = {
    width: "90%",
    height: "250",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  return (
    <>
      <section key={"gospel-section"}>
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
              <h3 className="display-4 fw-bold lh-1 text-body-emphasis">
                الإنجيل
              </h3>
              <p className="lead" style={{ whiteSpace: "pre-line" }}>
                {gospelDescription}
              </p>
            </div>
            <div className="col-lg-5">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-center">
                    <YouTube videoId={"98IhK5V53ks"} opts={opts} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 my-2">
              <Link
                href="/gospel"
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
