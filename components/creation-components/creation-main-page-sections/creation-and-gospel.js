import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function CreationAndGospelSection(props) {
  const articlesByCategoryGospel = props.articlesByCategoryGospel;
  return (<>
  {/* الكتاب المقدس والإنجيل */}
  <section
        className="rounded-4 border border-5 mt-3"
        key={"creation-and-gospel"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryGospel}
                id="category_gospel"
                const baseUrl = "creation"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>الكتاب المُقدَّس والإنجيل</h3>
                <p className="h5">
                  يتعرض الكتاب المقدس لهجمات ممنهجة من قِبَل العلمانيّين
                  والمُتديّنين المُساومين، <b>إلا أنَّ كلمة الله لا تسقط</b>.
                </p>
                <p className="h5">
                  تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة
                  الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط
                  هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال
                  الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع.
                </p>
                <Link
                  href="/creation/creation-gospel"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ مقالات هذه الفئة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>)
}