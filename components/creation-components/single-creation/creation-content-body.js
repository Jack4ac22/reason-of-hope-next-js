import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkRehype from "remark-rehype";
import gfm from "remark-gfm";
import ReactPlayer from "react-player/lazy";
import { Spotify } from "react-spotify-embed";
import YouTubeEmbed from "../../iframes/youtube-component";
import ModalImage from "../../general-compenents/modal-image";

export default function CreationContentBody(props) {
  const { creation } = props;

  const customRenderers = {
    ul(list) {
      return <ul className="">{list.children}</ul>;
    },
    ol(list) {
      // console.log(list);
      return <ol className="">{list.children}</ol>;
    },
    li(listItem) {
      // console.log(listItem);
      return <li className="text-break">{listItem.children}</li>;
    },
    // a(anchor) {
    //   // TODO: on Click of Bible Verse display the verse. from local json file.
    //   // TODO: on Click of a link open a pop up and display the page.
    //   // check if anchor.children is an array or not.
    // },
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
      // Check if the caption contains the word "full"
      const isFullWidth = image.alt.toLowerCase().includes("full");

      return (
        <Link href={`/blog-images/${image.src}`} key={image.src}>
          <Image
            className={`col-md-2 float-md-end mb-4 ms-md-3 img-fluid rounded float-end ${
              isFullWidth ? "w-100" : "" // Add w-100 class for full width if caption contains 'full'
            }`}
            src={`/blog-images/${image.src}`}
            alt={image.alt}
            width={400}
            height={300}
          />
        </Link>
      );
      // return <ModalImage image={image} />;
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
