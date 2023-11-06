import UiLogo from "./logo";
import Link from "next/link";
import BackToPreviousPage from "./back-to-previouse-page";
import ScrollToTopButton from "./scroll-to-top";

export default function UiHeader() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <UiLogo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                البداية
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/objections">
                اعتراضات
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/gospel">
                الإنجيل
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/creation">
                قضيّة الخلق
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/logic">
                المنطق
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/words">
                كلمة ورسالة
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/publications">
                منشورات
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/our-faith">
                إيماننا
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <BackToPreviousPage />
      <ScrollToTopButton />
    </nav>
  );
}
