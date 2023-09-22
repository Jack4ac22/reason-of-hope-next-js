import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";
import ShareIt from "../components/ui/share-it.js";

export default function Home() {
  const tags = ["الإنجيل", "الكتاب المقدس", "دفاعيات", "تبشير", "يسوع المسيح"];
  return (
    <div className={styles.container}>
      <HeroMain />
      <ShareIt url="ReasonOfHope.com" title="سبب الرجاء" tags={tags} />
    </div>
  );
}
