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
              <Link href="/objections"> اعتراضات</Link>
            </div>
            <div className="menu-item col">
              <Link href="/creation"> مقالات الخلق </Link>
            </div>
            <div className="menu-item col">
              <Link href="/logic"> المنطق</Link>
            </div>
            <div className="menu-item col">
              <Link href="/word">كلمة ورسالة</Link> 
            </div>
            <div className="menu-item col">
              <Link href="/publications"> منشورات </Link>
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
