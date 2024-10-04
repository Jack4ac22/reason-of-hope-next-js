"use client";
import YouTube from "react-youtube";
import { Suspense } from "react";
import Link from "next/link";
import YoutubeSkelton from "@/components/blog-components/skeltons/youtube-skelton";
export default function SubjectsSection() {
  const opts = {
    width: "100%",
    height: "150",
    playerVars: {
      autoplay: 0,
      controls: 1,
      light: 1,
    },
  };
  return (
    <section id="subjects" className="flex flex-wrap text-right justify-around content-center items-center mt-6 px-8 text-lg md:text-xl lg:text-2xl">

      <div className='md:w-1/3 my-2'>
        <Suspense fallback={<YoutubeSkelton />}>
          <YouTube
            videoId={"98IhK5V53ks"}
            opts={opts}
            className="rounded-xl"
          />
        </Suspense>
        <p className="w-full text-center my-2">
          <Link href="our-faith" className="section-link text-center"> رسالة الإنجيل </Link>
        </p>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-right my-2 uni-text-color">
        <p>
          يجب علينا أن نكون متيقنين أن البشارة السارة التي هي سرّ رجاءنا وفرحنا هي تجسد وحياة وموت وقيامة وارتفاع يسوع المسيح. جميع هذه العناصر معاً تشكل البشارة السارة التي يجب أن نحيا وفقها.
        </p>
        <p>
          نحن جميعاً نمتلك الميل إلى الإنجراف خلف الخطابات العاطفية والمشاعر وما أريد وما أشعر ومالذي يناسبني. لكن كل هذا لا يعني أيّ شيء! لا يحمل أيَّ قيمة! البشارة السارة هي أن كلَّ شيء تمَّ ونحن يجب أن نحيا وفق هذه البشارة وأن نبتعد عن الإنتقائية
        </p>
        <p>
          الإنجيل الذي يتم تقديمه دون التوبة ودون الخطية ودون الإيمان ودون الصليب ودون الآلام ليس انجيلاً
        </p>
        <p>
          المسيح مات ولكن الأمر لم ينته هناك فهو قد قام أيضاً
        </p>
      </div>
    </section>);
}