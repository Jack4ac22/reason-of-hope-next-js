import Link from "next/link";

export default function UiMainNav() {
  return (
    <>
      <nav className="col row">
        <div className="menu-item col">
          <Link href="/objections">اعتراضات</Link>
        </div>
        <div className="menu-item col">
          <Link href="/creation"> مقالات الخلق </Link>
        </div>
        <div className="menu-item col">
          <Link href="/logic"> المنطق</Link>
        </div>
        <div className="menu-item col">
          <Link href="/words">كلمة ورسالة</Link>
        </div>
        <div className="menu-item col">
          <Link href="/publications"> منشورات </Link>
        </div>
        <div className="menu-item col">
          <Link href="/contact"> اتصل بنا </Link>
        </div>
      </nav>
    </>
  );
}
