import classes from "./hero-main.module.css";
import Image from "next/image";

export default function HeroMain() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src="/ROH.png" width={600} height={232} alt="title" />
        </div>
        <p className="display-6">هذه الصفحة قيد الإنشاء حالياً...</p>
      </section>
    </>
  );
}
