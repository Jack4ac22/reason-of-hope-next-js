import Link from "next/link";
import Image from "next/image";
export default function LinkToCreation(props) {
  const { creation } = props;
  return (
    <>
      <h5>
        {" "}
        المقال من موقع إرساليات الخلق الدولية:
        <Link href={creation.creationLink ? creation.creationLink : 'https://creation.com/arabic'} target="_blank">
          <Image
            src="/blog-images/cmi.png"
            alte="CMI logo and link"
            width={75}
            height={75}
          />
        </Link>
      </h5>
    </>
  );
}
