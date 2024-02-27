import Link from "next/link";
import Image from "next/image";
export default function ExternalLink(props) {
  const { article } = props;
  if (article.creationLink) {
    return (
      <>
        <h5>
          {" "}
          المقال من موقع إرساليات الخلق الدولية:
          <Link
            href={
              article.creationLink
                ? article.creationLink
                : "https://creation.com/arabic"
            }
            target="_blank"
          >
            <Image
              src="/blog_images/cmi.png"
              alte="CMI logo and link"
              width={75}
              height={75}
            />
          </Link>
        </h5>
      </>
    );
  } else if (article.externalLink) {
    return (
      <>
        <h5>
          <Link
            href={
              article.externalLink
                ? article.externalLink
                : "www.NON_PROT_URL_BASE"
            }
            target="_blank"
          >
            <Image
              src="/blog_images/www.png"
              alte="External site logo and link"
              width={75}
              height={75}
            />
          </Link>
        </h5>
      </>
    );
  } else {
    return <></>;
  }
}
