import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels.js";
import Link from "next/link";
export default function PublicationsBooks(props) {
  const books_articles = props.books_articles;
  return (
    <>
      {/* الكتب المُترجمة */}
      <section
        className="rounded-4 border border-5 mt-3"
        key={"publications-books-sections"}
      >
        <div className="container mt-5 ">
          <div className="row justify-content-around">
            <div className="col-md-3">
              <AutoplayingCarousel
                articles={books_articles}
                id="publications-books-sections"
                const
                baseUrl="publications"
                isBook={true}
              />
            </div>
            <div className="col-md-6 mt-5">
              <div>
                <h3>الكتب المُترجمة</h3>
                <p className="h5">
                  نقدم إليكم نخبة من الكتب والكُتيّبات المترجمة من اللغة
                  الإنكليزية، والتي تتعامل مع مواضيع مختلفة ومهمة مثل قضيّة
                  الأصول وقضية التعامل مع سفر التكوين والكتاب المقدس.
                </p>

                <Link
                  href="/publications/books"
                  className=" h4 btn btn-info m-5"
                >
                  اقرأ كتب هذه الفئة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
