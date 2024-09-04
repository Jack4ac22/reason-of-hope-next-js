import WordsPageMetadata from "@/assets/blog/metadata/words";
import CardList from "@/components/blog-components/cards/cards-list/cards-list";
import { getArticlesByCategory } from "@/utils/blog/articles-functions";
export const metadata = WordsPageMetadata
export default function WordsPage() {
  const articles = getArticlesByCategory("كلمة-ورسالة");
  return (
    <main className="flex flex-col flex-wrap justify-center items-center content-center" aria-label="Words Study">
      <div className="max-w-2xl h-full mx-4 text-center">
        <section aria-labelledby="article-heading">
          <header>
            <p id="page-heading" className="sr-only">Words Study</p>
          </header>
        </section>
        <section className="uni-text-color">
          <h1 >
            كلمة ورسالة
          </h1>
          <p>مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر.</p>
        </section>
        <section>
          <CardList articles={articles}/>
        </section>
      </div>
    </main>)

}