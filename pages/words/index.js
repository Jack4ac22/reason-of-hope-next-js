import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";
import Head from "next/head";
import { getAllWords } from "../../utilities/word-functions";

export default function AllWordPage(props) {
  return (
    <>
      <Head>
        <title>كلمة ورسالة</title>
        <meta
          name="description"
          content="مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر."
        />
        <meta property="og:title" content="كلمة ورسالة" />
        <meta
          property="og:description"
          content="مجموعة من الدراسات التي تتناول عدداً من الكلمات العبرية أو اليونانية من الكتاب المقدس في محاولة إلى التعرف على معناها. وهذه الدراسات تهدف إلى توضيح السياق التاريخي والثقافي واللغوي لهذه الكلمات، وكذلك تفسيرها في ضوء المخطوطات والترجمات والتعليقات القديمة. وبذلك، تساهم هذه الدراسات في فهم أعمق للرسالة الإلهية التي يحملها الكتاب المقدس، وفي تقريبها من قلوب وعقول المؤمنين في عصرنا الحاضر."
        />
        <meta property="og:image" content={"/blog-images/page-cover.jpg"} />
        <meta property="og:image:alt" content={"صورة الغلاف لكلمة ورسالة"} />
      </Head>
      <ArticleCardsList articles={props.allWords} baseUrl="/words" />{" "}
    </>
  );
}
export async function getStaticProps(props) {
  const wordslist = getAllWords();

  return {
    props: {
      allWords: wordslist,
    },
  };
}
