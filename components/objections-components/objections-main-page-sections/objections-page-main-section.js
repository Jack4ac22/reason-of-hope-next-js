import Image from "next/image";
import Link from "next/link";
import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import BibleVerseHero from "../../ui/bible-verse-hero.js";

export default function ObjectionsPageMainSection(props) {
  const objectionsSectionOne = props.objectionsSectionOne;
  const objectionsSectionTwo = props.objectionsSectionTwo;
  const objectionsSectionThree = props.objectionsSectionThree;
  const objectionsSectionFour = props.objectionsSectionFour;
  const objectionsSectionFive = props.objectionsSectionFive;
  return (
    <>
      <section key="main-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <figure className="rounded mx-auto d-block">
                <Image
                  className="rounded mx-auto d-block img-fluid"
                  src={"/blogImages/bible-2110439_640.jpg"}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                <figcaption className="figure-caption text-center mt-1">
                  الكتاب المقدس هو مصدر موثوق للحقيقة المطلقة لأنَّه كلمة الله.
                  <Link href="/our-faith" className=" h4 btn btn-sm btn-info ">
                    اقرأ بيان إيماننا
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                يتواجد الكثير من الإدعاءات المنتشرة عبر فضاء المواقع الإلكترونية
                بأنَّ الكتاب المقدس مليء بالتناقضات، وبالتالي فإنَّه ليس مصدراً
                موثوقاً للحقيقة. كما يتم تقديم لوائح طويلة من الإنتقادات التي
                تتضمن إدعاءات بوجود آيات تُقدِّمُ تصريحات تناقض بعضها البعض، فما
                هي حقيقة هذه الإدعاءات؟
              </p>
              <p className="h4">
                تقدم لكم هذه السلسلة من المقاطع المصورة نظرة عامة على هذه الآيات
                بالإضافة إلى تحليل منطقي لما يُعتقد بأنَّه تناقض بين الآيات وذلك
                بالإعتماد على علم المنطق.
              </p>
              <p className="h4">
                إن هذه الدراسات مبنية بشكل أساسي على كتاب بعنوان: Keeping Faith
                in an Age of Reason: Refuting Alleged Bible Contradictions.
                للدكتور جيسون لايل.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="sectionOne">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 border border-dark rounded p-2 my-2">
              <figure className="rounded mx-auto d-block">
                <AutoplayingCarousel
                  articles={objectionsSectionOne}
                  id="objections-section-one"
                  baseUrl="objections"
                />
                <figcaption className="figure-caption text-center mt-1">
                  القسم الأول: الإختلافات الكمية أو العددية.
                  <Link
                    href="/objections/section-1"
                    className=" h4 btn btn-sm btn-info "
                  >
                    المزيد من المقالات
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                عند القيام باستقصاء لهذه الإدعاءات المطالبة بأمثلة عن الآيات
                التي يُفترض بها أن تكون متناقضةً بعضها مع بعض، نواجَه غالباً
                بردّ فعل عاطفي ينطوي على تكرار لأخطاء ومغالطات منطقية عديدة.
                بالإضافة إلى التماس العذر بوجود عدد من اللوائح التي تُقدِّم كماً
                كبيراً من الآيات التي يفترض أنها تتناقض بعضها مع بعض.
              </p>
              <p className="h4">
                إن ما سبق يُظهر أن معظم نُقّاد الكتاب المقدس غير مهتمين بالتدقيق
                بانتقاداتهم أو القيام بدراسات عقلانية لهذه الإدعاءات. إنهم وبشكل
                مباشر يُظهرون عدم محبتهم للكتاب المقدس وتعاليمه، وبالمطلق
                يُظهرون تحجّر قلبهم وحاجتهم إلى التجديد والولادة الثانية.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="sectionTwo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 border border-dark rounded p-2 my-2">
              <figure className="rounded mx-auto d-block">
                <AutoplayingCarousel
                  articles={objectionsSectionTwo}
                  id="objections-section-two"
                  baseUrl="objections"
                />
                <figcaption className="figure-caption text-center mt-1">
                  القسم الثاني: الإختلافات في أسماء الأشخاص والمواقع، والأنساب.
                  <Link
                    href="/objections/section-2"
                    className=" h4 btn btn-sm btn-info "
                  >
                    المزيد من المقالات
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                قبل أن تشعروا بالتهديد نتيجةً لوجود أعداد كبيرة من المُدخلات في
                هذه اللوائح، ندعوكم إلى البدء بتفقد هذه الإدعاءات بشكل فردي
                وشخصي، وعدم تجاهل التساؤلات التي قد تمتلكونها حيال العديد من هذه
                الإنتقادات. إن هذه العملية قد تكون مضنية وتتطلب بذل الجهد وطلب
                المساعدة في بعض الأحيان، إلا أن العائد هو تثبيت الإيمان
                والصيرورة على استعداد لمواجهة الهجمات الضروس التي قد تواجه
                إيماننا وعقيدتنا.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="sectionThree">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 border border-dark rounded p-2 my-2">
              <figure className="rounded mx-auto d-block">
                <AutoplayingCarousel
                  articles={objectionsSectionThree}
                  id="objections-section-three"
                  baseUrl="objections"
                />
                <figcaption className="figure-caption text-center mt-1">
                  القسم الثالث: الإختلافات في توقيت الأحداث.
                  <Link
                    href="/objections/section-3"
                    className=" h4 btn btn-sm btn-info "
                  >
                    المزيد من المقالات
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                إن عملية التدقيق في هذه الإعتراضات سُوف تقوم بإظهار كيف أن
                النقاد – وفي مُعظم الحالات – لم يقرأوا الآيات بطريقة أمينة، أو
                أنهم قاموا باقتصاص هذه الآيات من سياقها النصي لوضعها في سياق
                يُناسب رفضهم للحق الكتابي. في بعض الحالات الأُخرى، نجد أن
                النقّاد يقومون بارتكاب أخطاء منطقية في مقاربتهم وتحليلهم للآيات.
                كما ويوجد أيضاً استخدام للفروق التوافقية التي سوف نقوم بالتعامل
                معها بشكل أوفى عند استخدامها في هذه الدراسات.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="sectionFour">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 border border-dark rounded p-2 my-2">
              <figure className="rounded mx-auto d-block">
                <AutoplayingCarousel
                  articles={objectionsSectionFour}
                  id="objections-section-four"
                  const
                  baseUrl="objections"
                />
                <figcaption className="figure-caption text-center mt-1">
                  القسم الرابع: الإختلافات بين المُسَبِّبْ والنَّاتِج.
                  <Link
                    href="/objections/section-4"
                    className=" h4 btn btn-sm btn-info "
                  >
                    المزيد من المقالات
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <p className="h4">
                إن رحلتنا هذه، التي نرجوا أن تكون شيّقة ومفيدة لكم، عبر مئات
                الإعتراضات والإدعاءات المختلفة سوف تحمل الكثير من التحديات
                والبركات علينا، ذلك أننا سوف نقوم بتقديم وقراءة الآيات من الكتاب
                المقدس بطريقة متأنية ودقيقة لمعرفة الحق القادر على تحريرنا. سوف
                يتكشف لنا كيف أن غياب وجود أي تناقض حقيقيّ بين آيات الكتاب
                المقدس يُظهر حقيقةً كان قد أعلن عنها الروح القدس على لسان بولس
                الرسول في رسالته إلى أهل رومية حين قال:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="sectionFive">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 border border-dark rounded p-2 my-2">
              <figure className="rounded mx-auto d-block">
                <AutoplayingCarousel
                  articles={objectionsSectionFive}
                  id="objections-section-five"
                  const
                  baseUrl="objections"
                />
                <figcaption className="figure-caption text-center mt-1">
                  القسم الخامس: الإختلافات في التفاصيل.
                  <Link
                    href="/objections/section-5"
                    className=" h4 btn btn-sm btn-info "
                  >
                    المزيد من المقالات
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6">
              <BibleVerseHero
                body="فغَضَبُ اللهِ مُعلَنٌ مِنَ السّماءِ على كُفرِ البَشَرِ وشَرّهِم، يَحجُبونَ الحقّ بِمَفاسِدِهِم، لأنّ ما يَقدِرُ البَشَرُ أنْ يَعرِفوهُ عَنِ اللهِ جَعلَهُ اللهُ واضِحًا جَلِـيّا لهُم. فمُنذُ خلَقَ اللهُ العالَمَ، وصِفاتُ اللهِ الخَفِـيّةُ، أي قُدرَتُهُ الأزلِـيّةُ وأُلوهِيّتُهُ، واضِحَةٌ جَلِـيّةٌ تُدرِكُها العُقولُ في مَخلوقاتِهِ. فلا عُذرَ لهُم، إذًا. عَرَفوا اللهَ، فما مَجّدوهُ ولا شكَروهُ كإِلهٍ، بَلْ زاغَت عُقولُهُم ومَلأ الظّلامُ قُلوبَهُم الغَبـيّةَ. زَعَموا أنّهُم حُكماءُ، فصاروا حَمقى واَستَبْدَلوا بِمَجدِ اللهِ الخالِدِ صُوَرًا على شاكِلَةِ الإنسانِ الفاني والطّيورِ والدّوابِ والزّحّافاتِ. لذلِكَ أسلَمَهُمُ اللهُ بِشَهَواتِ قُلوبِهِم إلى الفُجورِ يُهينونَ بِه أجسادَهُم. اَتّخَذوا الباطِلَ بَدَلاً مِنَ الحقّ الإلَهيّ وعَبَدوا المَخلوقَ وخَدَموهُ مِنْ دُونِ الخالِقِ، تَبارَكَ إلى الأبدِ آمين.
                "
                reference="رومية ١: ١٨-٢٥"
                translation="الترجمة العربية المشتركة"
              />
              <p className="h4"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
