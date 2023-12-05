import Image from "next/image";
import Link from "next/link";
export default function ObjectionsPageSectionTwo(props) {
  const articles = props.articles;
  return (
    <>
      {/* القسم الثاني*/}
      <section key="main-section-two" className="mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <figure className="rounded mx-auto d-block">
                <Image
                  alt="cover image for the section two of the objections page"
                  className="rounded mx-auto d-block img-fluid "
                  src={"/blog_images/pexels-photo-2127869.jpeg"}
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
                يتناول هذا القسم الإدعاءات القائلة بأن الكتاب المُقدَّس يخلط بين أسماء الأشخاص والمواقع، أو أنه يذكر بشكل خاطئ صلات القُرْبى بين أشخاص مُعَيَّنين.
              </p>
              <p className="h4">
              إن الكتاب المقدس يحتوي على التاريخ الحقيقي لذلك فهو يذكر في كثير من المواضع أسماء المواقع التي وقعت فيها الأحداث المهمّة، وكذلك أسماء الشخصيات التي لعبت أدواراً فيها. كما ويذكر في مواضع كثيرة أُخرى، سلاسل تفصيلية للأنساب، فهل يناقض نفسه في هذا الخصوص؟
              </p>
              <p className="h4">
              هذا هو ما سوف تتم الإجابة عليه في هذا القسم.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
