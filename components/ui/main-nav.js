import Link from "next/link";

export default function UiMainNav() {
  return (
    <>
      <nav className="col row">
        <div className="menu-item col">
          <Link href="/objections">التناقضات</Link>
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
          <Link href="/our-faith"> إيماننا</Link>
        </div>
        <div className="menu-item col">
          <Link href="/contact"> اتصل بنا </Link>
        </div>
      </nav>
    </>
  );
}
