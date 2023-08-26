import Link from "next/link";
import Image from "next/image";

export default function UiLogo() {
  return (
    <>
      <div className="logo col">
        <Link href="/">
          <Image src="/ROH.png" alt="سبب الرجاء" width={120} height={46} />
        </Link>
      </div>
    </>
  );
}
