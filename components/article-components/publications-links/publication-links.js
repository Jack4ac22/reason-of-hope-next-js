import Image from "next/image";
import Link from "next/link";
export default function PublicationLinks(props) {
  const pdf =
    props.article.resources.filter((resource) => resource.title === "pdf")
      .length > 0
      ? props.article.resources.filter((resource) => resource.title === "pdf")
      : null;
  const epub =
    props.article.resources.filter((resource) => resource.title === "epub")
      .length > 0
      ? props.article.resources.filter((resource) => resource.title === "epub")
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
  const audio = props.article.audio;
  const spotify = audio.filter((resource) =>
    resource.hasOwnProperty("spotify")
  )[[0]]["spotify"];
  const applePodcasts = audio.filter((resource) =>
    resource.hasOwnProperty("applePodcasts")
  )[[0]]["applePodcasts"];
  const googlePodcasts = audio.filter((resource) =>
    resource.hasOwnProperty("googlePodcasts")
  )[[0]]["googlePodcasts"];
  const hearthisAt = audio.filter((resource) =>
    resource.hasOwnProperty("hearthisAt")
  )[[0]]["hearthisAt"];
  const anchorLink = audio.filter((resource) =>
    resource.hasOwnProperty("anchorLink")
  )[[0]]["anchorLink"];
  const youtube = props.article.youtube;

  return (
    <>
      <div className="container-md">
        يُمكنكم الحصول على هذا الكتاب من خلال إحدى المنصات التالية:
      </div>
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
        {pdf && (
          <Link
            href={`/publications/${pdf[0].link}`}
            download={true}
            target="_blank"
          >
            <Image src="/blog_images/pdf.png" alt="" width={75} height={75} />
          </Link>
        )}
        {/* EPUB */}
        {epub && (
          <Link
            href={`/publications/${epub[0].link}`}
            download={true}
            target="_blank"
          >
            <Image src="/blog_images/epub.png" alt="" width={75} height={75} />
          </Link>
        )}
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

      <div className="container-md">
        {/* Spotify */}
        {spotify && (
          <Link href={spotify} target="_blank">
            <Image
              src="/blog_images/spotify.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* Apple Podcasts */}
        {applePodcasts && (
          <Link href={applePodcasts} target="_blank">
            <Image
              src="/blog_images/apple-podcasts.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* Google Podcasts */}
        {googlePodcasts && (
          <Link href={googlePodcasts} target="_blank">
            <Image
              src="/blog_images/google-podcasts.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* Hearthis.at */}
        {hearthisAt && (
          <Link href={hearthisAt} target="_blank">
            <Image
              src="/blog_images/hear-this.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* Anchor.fm */}
        {anchorLink && (
          <Link href={anchorLink} target="_blank">
            <Image
              src="/blog_images/anchor.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        )}
        {/* Youtube */}
        {youtube && (
          <Link href={youtube} target="_blank">
            <Image
              src="/blog_images/youtube.png"
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
