import "../styles/globals.css";
import Head from "next/head";
import UiHeader from "../components/ui/header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reason Of Hope</title>
        <title>سبب الرجاء</title>
        <meta
          name="description"
          content="صفحى دفاعيى تبشيريّة بالإيمان المسيحي القويم المبني على الكتاب المقدس بوصفه المصدر الوحيد المعصوم عن الخطأ ليقود إيماننا ويُقَوِّم علاقتنا مع الله."
        />
      </Head>
      <UiHeader />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
