import VisitCMIWebsite from "../creation-components/creation-pages-list/visit-cmi";
import Image from "next/image";
import Link from "next/link";

export default function UiFooter() {
  return (
    <>
      {/* TODO: add visit CMI */}
      <footer className="py-5 border-top">
        <div className="row justify-content-between">
          <div className="col-6 col-md-2 mb-3 d-none d-md-block">
            {/* <h5>قضية الخلق</h5> */}
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/creation"
                  className="nav-link p-0 text-body-secondary"
                >
                  قضية الخلق
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/creation/creation-gospel"
                  className="nav-link p-0 text-body-secondary"
                >
                  الكتاب المُقدَّس والإنجيل
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/creation/biblical-world"
                  className="nav-link p-0 text-body-secondary"
                >
                  العالم التوراتي
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/creation/dino-dating"
                  className="nav-link p-0 text-body-secondary"
                >
                  الديناصورات والتأريخ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/creation/evolution-ethics"
                  className="nav-link p-0 text-body-secondary"
                >
                  التطور ونتائجه
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/creation/modern-scince"
                  className="nav-link p-0 text-body-secondary"
                >
                  علوم معاصرة
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            {/* <h5>plcae_holder</h5> */}
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/gospel"
                  className="nav-link p-0 text-body-secondary"
                >
                  الإنجيل
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/objections"
                  className="nav-link p-0 text-body-secondary"
                >
                  الإعتراضات
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/studies"
                  className="nav-link p-0 text-body-secondary"
                >
                  دراسات كتابية
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/publications"
                  className="nav-link p-0 text-body-secondary"
                >
                  إصدراتنا
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/our-faith"
                  className="nav-link p-0 text-body-secondary"
                >
                  إيماننا
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            {/* <h5>المزيد</h5> */}
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/categories"
                  className="nav-link p-0 text-body-secondary"
                >
                  الفئات
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/tags" className="nav-link p-0 text-body-secondary">
                  الوسوم
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/quizz"
                  className="nav-link p-0 text-body-secondary"
                >
                  مسابقات
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/contact"
                  className="nav-link p-0 text-body-secondary"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 className="rtl">اشترك للحصول على نشرتنا الإخبارية</h5>
              <p className="rtl">
                هذه النشرة هي نشرة ربع سنوية، بالإضافة إلى عدد من الرسائل
                الإستثنائية عند نشر دراسات كتابية خاصّة.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  البريد الإلكتروني
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="بريدك الإلكتروني"
                />
                <button className="btn btn-primary" type="button">
                  اشترك الآن
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <ul>
            <p dir="rtl" className="text-center">
              {" "}
              © 2023 سبب الرجاء.
            </p>
            <p dir="rtl" className="text-center">
              {" "}
              جميع الحقوق محفوظة.
            </p>
            <p dir="ltr" className="text-center">
              © 2023 Reason Of Hope, Inc. All rights reserved.
            </p>
          </ul>
        </div>
      </footer>
    </>
  );
}
