import styles from "../styles/Home.module.css";
import HeroMain from "../components/main/hero-main.js";
import ModalImage from "../components/general-compenents/modal-image";

const image = {
  src: "ROH.png",
  alt: "ROH",
};
// create couple images as an array of objects.
const images = [
  {
    src: "blog-images/001.jpg",
    alt: "ROH",
  },
  {
    src: "blog-images/013.jpg",
    alt: "ROH",
  },
  {
    src: "blog-images/032.jpg",
    alt: "ROH",
  },
  {
    src: "blog-images/saint-george.png",
    alt: "ROH",
  },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <HeroMain />
      <ModalImage image={image} />
      {images.map((image) => {
        return <ModalImage image={image} />;
      })}
    </div>
  );
}
