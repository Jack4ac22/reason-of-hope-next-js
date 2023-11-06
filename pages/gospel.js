import PageTitle from "../components/general-compenents/page-title";
import YouTubeEmbed from "../components/iframes/youtube-component";
import ShareIt from "../components/ui/share-it";
import BibleVerseHero from "../components/general-compenents/bible-verse-hero";

export default function TheGospelPage() {
  return (
    <>
      <PageTitle
        title="الإنجيل - البشرى السّارة"
        description="كامل غضب الله الذي استحقه شعبه قد انسكب بتمامه على ابنه يسوع. لقد أصبح بذلك يسوع الكفّارة لخطايانا."
        image="/blog-images/art-2092530_1920.jpg"
      />
      <ShareIt url="/gospel" />
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
          }}
        >
          <YouTubeEmbed video="98IhK5V53ks" />
        </div>
      </section>
      <section>
          <BibleVerseHero />
      </section>
    </>
  );
}
