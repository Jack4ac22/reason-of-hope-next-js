import Image from "next/image";
import Link from "next/link";
export default function CreationPageMainSection() {
  return (
    <>
      <section
        className="rounded-4 border border-5 mt-3"
        key={"main-section-article-page"}
      >
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5 mb-5">
              <Image
                className="rounded mx-auto d-block"
                src="/creation-pages-images/pexels-photo-5199754.jpeg"
                alt={`Image for a girl holding a Bible.`}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 mt-5 mb-5">
              <p className="h3">
                إن قضيّة الخلق هي من القضايا المهمة التي تُشكل حجر عثرة أمام
                الكثير من المؤمنين. لا تُبقي على تساؤلاتك دون إجابات!
              </p>
              <p className="h3">ابدأ الآن واطلب المساعدة.</p>
              <Link href="/contact" className=" h4 btn btn-info m-5">
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
