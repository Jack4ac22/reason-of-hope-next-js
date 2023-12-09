import Image from "next/image";
import Link from "next/link";
export default function PublicationLinks(props) {
  const pdf =
    props.article.resources.filter((resource) => resource.title === "pdf")
      .length > 0
      ? props.article.resources.filter((resource) => resource.title === "pdf")
      : null;
  const archive =
    props.article.resources.filter((resource) => resource.title === "archive")
      .length > 0
      ? props.article.resources.filter(
          (resource) => resource.title === "archive"
        )
      : null;
  const googleBooks =
    props.article.resources.filter(
      (resource) => resource.title === "googleBooks"
    ).length > 0
      ? props.article.resources.filter(
          (resource) => resource.title === "googleBooks"
        )
      : null;
  const appleBooks =
    props.article.resources.filter(
      (resource) => resource.title === "appleBooks"
    ).length > 0
      ? props.article.resources.filter(
          (resource) => resource.title === "appleBooks"
        )
      : null;

  console.log(archive);
  return (
    <>
      <div className="container-md">
        {/* APPLE Books */}
        {appleBooks && (
          <Link href={appleBooks[0].link} target="_blank">
            <Image src="/blog_images/apple.png" alt="" width={75} height={75} />
          </Link>
        )}
        {/* Google Books */}
        {googleBooks && (
          <Link href={googleBooks[0].link} target="_blank">
            <Image
              src="/blog_images/google-books.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* PDF */}

        {/* {pdf && (
          <Link
            href={`/publications/${pdf[0].link}`}
            download={true}
            target="_blank"
          >
            <Image src="/blog_images/pdf.png" alt="" width={75} height={75} />
          </Link>
        )} */}

        {/* Archive */}
        {archive && (
          <Link href={archive[0].link} target="_blank">
            <Image
              src="/blog_images/internet-archive.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
      </div>
    </>
  );
}
