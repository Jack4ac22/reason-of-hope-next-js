import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";

import FeaturedWords from "../components/word-components/featured-words.js";

export default function Home() {
  const dummyWords = [
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacinia sapien.",
      image: "001.jpg",
    },
    {
      title: "Dolor Sit Amet",
      content:
        "Dolor sit amet, consectetur adipiscing elit. Sed nec lacinia sapien.",
      image: "003-1.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <HeroMain />

      <FeaturedWords words={dummyWords} title="Featured Words" />
    </div>
  );
}
