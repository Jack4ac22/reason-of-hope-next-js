import { getAllBlogArticles } from "../../utilities/articles-functions";
import { randomArticlesFromArray } from "../../utilities/general-functions";
import ArticleCard from "../../components/general-compenents/cards-list/article-card";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage(props) {
  const articles = props.articles;
  const randomArticles = randomArticlesFromArray(articles, 8);
  const router = useRouter();
  const { asPath } = router;

  // find the date pattern in the path the date is with this pattern /yyyy/mm/dd
  const datePattern = asPath.match(/\/\d{4}\/\d{2}\/\d{2}/);
  // reconstruct the date to be in the format yyyy-mm-dd if the pattern starts with  / skipp it
  const date = datePattern[0].startsWith("/")
    ? datePattern[0].replace("/", "")
    : datePattern[0];
  const restructeredDate = date.replace(/\//g, "-");

  // find the pattern "objection" followed with a number between 1 and 500 in the path
  const objectionPattern = asPath.match(/objection\d{1,3}/);

  const possibleRelatedArticles = [];
  articles.map((article) => {
    if (
      article.date.includes(restructeredDate) &&
      !possibleRelatedArticles.includes(article)
    ) {
      possibleRelatedArticles.push(article);
    }
    if (
      article.slug.includes(objectionPattern) &&
      !possibleRelatedArticles.includes(article)
    ) {
      possibleRelatedArticles.push(article);
    }
  });

  return (
    <>
      <div className="container">
        <h1>هذه الصفحة غير متوفرة</h1>
        <p>
          إن التحديث الذي قمنا به مؤخراً لتحسين العرض وسرعة الإستجابة بالإضافة
          إلى تغيير المُضيف، قد تسبب ببعض المشاكل التقنية.
        </p>
        <p>الرجاء قم تصفح موقعنا الجديد للوصول إلى المنشور المطلوب.</p>
        <p>شكراً لتفهمكم.</p>
        <p>الصفحة المطلوبة: </p>
        <p dir="ltr">{asPath}</p>
        <Link className="btn btn-primary" href="/contact">
          اتصل بنا
        </Link>
        <h2>المقالات المشابهة</h2>
        {possibleRelatedArticles.map((article) => (
          <ArticleCard
            article={article}
            baseUrl=""
            key={article.slug + article.date}
          />
        ))}
      </div>

      <h2>المقالات مقترحة للقراءة</h2>
      <div className="row border border-rounded-3 py-3">
        {randomArticles.map((article) => (
          <ArticleCard
            article={article}
            baseUrl=""
            key={article.slug + article.date}
          />
        ))}
      </div>
    </>
  );
}
export async function getStaticProps() {
  const articles = getAllBlogArticles();

  return {
    props: {
      articles: articles,
      randomArticles: randomArticlesFromArray(articles, 3),
    },
    revalidate: 30000,
  };
}
