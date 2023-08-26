import Image from "next/image";
import ReactMarkdown from "react-markdown";
export default function WordContentBody(props) {
  const { word } = props;

  return (
    <>
    <div className="clearfix">
      <Image
        src={`/word-images/${word.coverImage}`}
        className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" 
        alt={`Cover Image for: ${word.slug}`}
        width={430}
        height={180}
        loading="lazy"
      />

      <ReactMarkdown>{word.content}</ReactMarkdown>
      </div>
    </>
  );
}
