import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";
import SampleMain from "../components/main/sample-main.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroMain />
    </div>
  );
}
