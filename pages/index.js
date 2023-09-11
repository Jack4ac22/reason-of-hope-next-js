import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroMain />
      <div>
        <h1>Main</h1>
      </div>
    </div>
  );
}
