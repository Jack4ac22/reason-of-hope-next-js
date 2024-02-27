import Image from "next/image";

export default function UiLogo() {
  return (
    <>
      <div className="logo col">
          <Image src="/ROH.png" alt="سبب الرجاء" width={120} height={46} />
      </div>
    </>
  );
}
