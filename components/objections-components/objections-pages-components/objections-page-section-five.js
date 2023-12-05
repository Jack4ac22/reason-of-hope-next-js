import Image from "next/image";
import Link from "next/link";
export default function ObjectionsPageSectionFive(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الخامس*/}
      <section key="main-section-five" className="mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <figure className="rounded mx-auto d-block">
                <Image
                  alt="cover image for the section five of the objections page"
                  className="rounded mx-auto d-block img-fluid "
                  src={"/blog_images/pexels-photo-6681855.jpeg"}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                {/* <figcaption className="figure-caption text-center mt-1">
                  الكتاب المقدس هو مصدر موثوق للحقيقة المطلقة لأنَّه كلمة الله.
                  <Link href="/our-faith" className=" h4 btn btn-sm btn-info ">
                    اقرأ بيان إيماننا
                  </Link>
                </figcaption> */}
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">نجد في البعض من آيات الكتاب المقدس بعض التفاصيل التي تعطي الانطباع بأنها غير متوافقة مع التفاصيل التي تقدمها آيات آُخرى تتعامل مع ذات الموضوع. ويكون الأمر الغالب هو أن النُّقاد يشيرون إلى الاختلافات في الطرق التي يقوم بها كُتَّاب الأناجيل بتسجيل الأحداث، والأمر الأكيد أنَّه يوجد اختلافات من هذا النوع. لكن السؤال هو: هل هي تناقضات أم أنها اختلافات متوافقة؟
              </p>
              <p className="h4">
              لا يوجد أي خطأ في أن يقوم أحد الأشخاص بتدوين أن الحادثة قد وقعت بعد شروق الشمس في الوقت الذي يقوم شخص آخر بتسجيل الحادثة على أنها وقعت في الصباح. على الرغم من أن الصياغة مختلفة بين السردين السابقين إلا أنهما ليسا متناقضين، والطبيعة البشرية تلعب دوراً هاماً في مثل هذا النوع من الإدعاءات، ذلك أنها تدفع القارئ إلى أن يقوم باستخدام مخيلته في استحضار المعلومات التي لا يقدمها النص، مثل الأماكن التي كان يقف فيها الأشخاص، عدد الأشخاص الذين كانوا حاضرين دون أن يذكرهم النص، أو الوقت الدقيق لوقوع الأحداث وذلك على الرغم من عدم وجود هذه التفاصيل في النص. الأمر الغالب هو أن التناقضات ستكون في مخيلة القارئ وليس لها وجود في الآيات التي يقوم بنقدها.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
