import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkRehype from "remark-rehype";
import gfm from "remark-gfm";
export default function WordContentBody(props) {
  const { word } = props;

  const customRenderers = {
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
        <Link href={`/blog-images/${image.src}`}>
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
        children={word.content}
        remarkPlugins={[gfm]}
        rehypePlugins={[remarkRehype]}
        components={customRenderers}
      />
    </>
  );
}
