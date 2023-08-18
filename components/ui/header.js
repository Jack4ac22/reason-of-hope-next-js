import Link from "next/link";
import Image from "next/image";
export default function UiHeader() {
  return (
    <>
      <header>
        <div className="container row">
          <div className="logo col">
            <Link href="/">
              <Image src="/ROH.png" alt="سبب الرجاء" width={120} height={46} />
            </Link>
          </div>
          <div className="col row">
            <div className="menu-item col">
              <Link href="/about"> اعتراضات</Link>
            </div>
            <div className="menu-item col">
              <Link href="/articles"> مقالات الخلق </Link>
            </div>
            <div className="menu-item col">
              <Link href="/videos"> الإنجيل</Link>
            </div>
            <div className="menu-item col">
              <Link href="/books"> منشورات </Link>
            </div>
            <div className="menu-item col">
              <Link href="/contact"> اتصل بنا </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
