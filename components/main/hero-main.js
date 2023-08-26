import classes from "./hero-main.module.css";
import Image from "next/image";

export default function HeroMain() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src='/ROH.png' width={600} height={232} />
        </div>
        <p className="display-6">صفحة تبشيرية دفاعية إصلاحية</p>
      </section>
    </>
  );
}
