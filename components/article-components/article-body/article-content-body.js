import ReactMarkdown from "react-markdown";
import remarkRehype from "remark-rehype";
import gfm from "remark-gfm";
import ModalImage from "../../general-compenents/modal-image";

export default function ArticleContentBody(props) {
  const { article } = props;

  const customRenderers = {
    table(table) {
      return (
        <div className="table-responsive">
          <table className="table table-striped">{table.children}</table>
        </div>
      );
    },
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
    a(anchor) {
      // console.log(anchor.href);
      // return ModalURL((anchor = anchor));
      return (
        <>
          <a href={anchor.href} target="_blank">
            {anchor.children[0]}
          </a>
        </>
      );
      // TODO: on Click of Bible Verse display the verse. from local json file.
      // TODO: on Click of a link open a pop up and display the page.
      // check if anchor.children is an array or not.
      //  TODO: if the link is to an external site open in a new tab.
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
      return <ModalImage image={image} />;
      // Check if the caption contains the word "full"
      // const isFullWidth = image.alt.toLowerCase().includes("full");

      // return (
      //   <Link href={`/blog_images/${image.src}`} key={image.src}>
      //     <Image
      //       className={`col-md-2 float-md-end mb-4 ms-md-3 img-fluid rounded float-end ${
      //         isFullWidth ? "w-100" : "" // Add w-100 class for full width if caption contains 'full'
      //       }`}
      //       src={`/blog_images/${image.src}`}
      //       alt={image.alt}
      //       width={400}
      //       height={300}
      //     />
      //   </Link>
      // );
    },
    // TODO: add a custom render for the images which are in a link to be link images not to use the ModalImage.
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = {
          src: `${node.children[0].properties.src}`,
          alt: node.children[0].properties.alt,
        };
        return <ModalImage image={image} />;
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <>
      <ReactMarkdown
        children={article.content}
        remarkPlugins={[gfm]}
        rehypePlugins={[remarkRehype]}
        components={customRenderers}
      />
    </>
  );
}