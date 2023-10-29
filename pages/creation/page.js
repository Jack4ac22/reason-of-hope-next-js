import { randomArticlesFromArray } from "../../utilities/general-functions";
import {
  getAllCreationArticles,
  getCreationArticlesByCategory,
} from "../../utilities/creation-functions";
import AutoplayingCarousel from "../../components/general-compenents/carousels/Autoplaying-carousels";
import CreationPagesList from "../../components/creation-components/creation-pages-list/creation-pages-list";
import PageTitle from "../../components/general-compenents/page-title";

import Link from "next/link";
import Image from "next/image";

export default function MainCreationOne(props) {
  const creationArticles = props.creationArticles;
  const articlesByCategoryGospel = props.articlesByCategoryGospel;

  return (
    <>
      <PageTitle title="قضية الخلق" />
      <figure className="m-5">
        <blockquote class="blockquote">
          <p>فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          التكوين ١: ١ <cite title="Source Title">ترجمة البستاني ڤاندايك</cite>
        </figcaption>
      </figure>

      <CreationPagesList />
      <section className="rounded-4 border border-5 mt-3">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5 mb-5">
              <Image
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
                {" "}
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-4 border border-5 mt-3">
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <AutoplayingCarousel
                articles={articlesByCategoryGospel}
                id="category_gospel"
              />
            </div>
            <div className="col-md-6 mt-5 mb-5">
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
    </>
  );
}

export async function getStaticProps(props) {
  const allArticlesByTitle = getAllCreationArticles("slug");
  const randomArticles = randomArticlesFromArray(allArticlesByTitle, 3);
  const articlesByCategoryGospel = randomArticlesFromArray(
    getCreationArticlesByCategory("الكتاب-المقدس-والإنجيل"),
    3
  );
  return {
    props: {
      creationArticles: randomArticles,
      articlesByCategoryGospel: articlesByCategoryGospel,
    },
  };
}
