import YouTube, { YouTubeProps } from "react-youtube";
import AutoplayingCarousel from "../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function BiblicalWorldSection(props) {
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
      {/* gospel section */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"gospel-section"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5">
              <div>
                <h3>الإنجيل</h3>
                <p className="h5" style={{ whiteSpace: "pre-line" }}>
                  {gospelDescription}
                </p>
                <YouTube videoId={"98IhK5V53ks"} opts={opts} />
                <Link href="/gospel" className=" h4 btn btn-info m-5">
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
