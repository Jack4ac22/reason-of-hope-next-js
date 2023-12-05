import Image from "next/image";
import Link from "next/link";
export default function ObjectionsPageSectionFour(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الرابع*/}
      <section key="main-section-four" className="mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <figure className="rounded mx-auto d-block">
                <Image
                  alt="cover image for the section four of the objections page"
                  className="rounded mx-auto d-block img-fluid "
                  src={"/blog_images/creativity-819371_640.jpg"}
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
              <p className="h4">
              سوف نقوم في هذا القسم بفحص الإدعاءات التي يتم تقديمها بأن الكتاب المقدس يناقض نفسه فيما يختص بالمسببات – أي: مَنْ الشخص أو ما الأمْرُ الذي تسبب بوقوع أحداث معيّنة؟ ونجد أنه يتم تقديم إحدى الآيات على أنها تُقَدِّمُ مُسبِّباً معيناً في الوقت الذي تُقدِّم آية أُخرى مُسبِّباً آخر، فأيٌّ منهما هو الصحيح؟"
              </p>
              <p className="h4">
              إن المُسبِّبات تكون في معظم الحالات متعددة الأوجه، ومعظم الأحداث تمتلك مُسبِّبات متعدِّدة؛ وبالتالي فإنه من الممكن أن نجد آيتين مختلفتين تقومان بتقديم مُسبِّبين صحيحين دون وجود أي تناقض. 
              </p>
              <p className="h4">
              على سبيل المثال، مالذي يتسبب بهطول الأمطار؟ هل هي رطوبة الهواء، أم انخفاض درجة حرارة الهواء إلى مادون نقطة التندِّي، أم وجود جبهة هوائية باردة، أم الجاذبية التي تقوم بجذب قطرات المطر، أم قوى الطبيعة، أم الله؟ 
              </p>
              <p className="h4">
              إن جميع الأمور التي سبق ذكرها هي مُسبِّبات لهطول الأمطار، ولا يوجد أي تناقض فيما بينها، إنما هي مختلفة بشكل متوافق. ويعتبر الأمر ارتكاباً لمغالطة التشعب في حال تم الإفتراض بأن حادثة معينة أو نتيجة معينة تمتلك مُسَبِّبَاً واحداً فقط. إضافةً إلى ذلك، فإنه لمجرد أن حادثتين قد وقعتا في وقت واحد فإن هذا لن يعني بالضرورة بأن إحداهما قد تسبَّبت بالأُخرى، وهذا ما يعرف بمغالطة المُسبِّبات الخاطئة. إنَّ هذه الأخطاء في التفكير المنطقي هي ما يقف وراء الكثير من الأخطاء النقدية التي يرتكبها النُقّاد في اعتراضاتهم المقدمة والتي سوف يتم التعامل معها في هذا القسم


              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
