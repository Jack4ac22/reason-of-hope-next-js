import Link from "next/link";
import Image from "next/image";
export default function VisitCMIWebsite() {
  return (
    <>
      <Link
        class="nav-item nav-link link-body-emphasis align-self-center"
        href="https://creation.com/arabic"
        key="CMI-Arabic-home"
      >
        <Image
          src="/blog-images/CMI.png"
          alt={`icon of: CMI visit website `}
          width={35}
          height={35}
        />
        {/* {page.arabicTitle} */}
      </Link>
    </>
  );
}
