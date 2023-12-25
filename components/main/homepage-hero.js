import Link from "next/link";
import Image from "next/image";
export default function HomepageHero(props) {
  return (
    <>
      <section>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 d-none d-md-block">
              <Image
                src="/Reason-Of-Hope-square.png"
                className="img-fluid"
                alt="Reason Of Hope LOGO"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                أهلا بكم
              </h1>
              <p className="lead mb-4">
                نحن مسيحيّون مؤمنون بأنَّ كُلَّ الكتاب المقدس هو كلمة الله وقادر
                على أن يجعل الإنسان حكيماً لبلوغ الخلاص عن طريق الإيمان في
                المسيح يسوع. كُلُّ الكتاب هو مُوحى به من الله وهو مصدر السلطان
                المعصوم عن الخطأ لجميع التعاليم المُلزمة على كلّ مؤمن.
              </p>
              <p className="lead mb-4">
                إن رجاءنا بالخلاص هو بنعمة الله (وحدها) بالإيمان (وحده) بالمسيح
                (وحده) من خلال الكتاب المقدس (وحده) لمجد الله (وحده).
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  href="/our-faith"
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                >
                  اقرأ بيان إيماننا الموجز
                </Link>
                {/* <Link
                  href="/contact"
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  اتصل بنا
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
