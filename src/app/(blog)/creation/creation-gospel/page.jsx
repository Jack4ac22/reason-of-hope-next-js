import { Suspense } from "react";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import CreationGospelPageMetadata from "@/assets/blog/metadata/creation-gospel";

export const metadata = CreationGospelPageMetadata;
export default function CreationGospelPage() {
  const articles = getArticlesByCategory("الكتاب-المقدس-والإنجيل");
  return (
    <>
      <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="The Gospel and the Bibel">
        <div className="page-main-container">
          <section aria-labelledby="article-heading">
            <header>
              <p id="page-heading" className="sr-only">The Gospel and the Bible</p>
            </header>
          </section>
          <section className="uni-text-color">
            <h1 >
              الكتاب المقدس والإنجيل
            </h1>
            <p>
              يتعرض الكتاب المقدس لهجمات ممنهجة وشركة من قِبَل العلمانيّين والمُتديّنين المُساومين، إلا أنَّ كلمة الله لا تسقط.
            </p>
            <p>
              تجدون ضمن هذه الفئة مجموعة المقالات المرتبطة بكيفية مُقاربة الكتاب المقدس بخصوص قضية الخلق بشكل خاصّ، بالإضافة إلى ارتباط هذه القضية بالبشرى الخلاصية بنعمة الله المجانية من خلال الإيمان بالفداء المجاني بالإيمان بالمسيح يسوع.
            </p>
          </section>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <CardList articles={articles} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}