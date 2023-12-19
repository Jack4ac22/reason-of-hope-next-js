import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import UiHeader from "../components/ui/header";
import UiFooter from "../components/ui/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reason Of Hope</title>
        <title>سبب الرجاء</title>
        <meta
          name="description"
          content="صفحة دفاعية تبشيريّة بالإيمان المسيحي القويم المبني على الكتاب المقدس بوصفه المصدر الوحيد المعصوم عن الخطأ ليقود إيماننا ويُقَوِّم علاقتنا مع الله."
        />
      </Head>
      <UiHeader />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <SpeedInsights />
      <UiFooter />
      <Analytics />
    </>
  );
}

export default MyApp;
