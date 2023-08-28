import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkRehype from "remark-rehype";
import gfm from "remark-gfm";
import ReactPlayer from "react-player/lazy";
import { Spotify } from "react-spotify-embed";

export default function CreationContentBody(props) {
  const { creation } = props;

  const customRenderers = {
    a(anchor) {
      if (anchor.children[0] === "Youtube") {
        return <ReactPlayer url={anchor.href} />;
      } else if (anchor.children[0] === "Spotify") {
        return <Spotify wide link={anchor.href} />;
      } else {
        return (
          <>
            <Link href={anchor.href}>{anchor.children}</Link>
          </>
        );
      }
    },
    hr() {
      return <hr className="m-6" />;
    },
    blockquote(quote) {
      return (
        <div className="card m-1">
          <div className="card-body">
            <blockquote className="blockquote h5">{quote.children}</blockquote>
          </div>
        </div>
      );
    },
    img(image) {
      return (
        <Link href={`/blog-images/${image.src}`} key={image.src}>
          <Image
            className="col-md-2 float-md-end mb-4 ms-md-3 img-fluid"
            src={`/blog-images/${image.src}`}
            alt={image.alt}
            width={300}
            height={100}
          />
        </Link>
      );
    },
  };

  return (
    <>
      <ReactMarkdown
        children={creation.content}
        remarkPlugins={[gfm]}
        rehypePlugins={[remarkRehype]}
        components={customRenderers}
      />
    </>
  );
}
