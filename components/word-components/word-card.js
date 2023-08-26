import WordCardFooter from "./word-card-footer";
import WordCardBody from "./word-card-body";
import Link from "next/link";
import Image from "next/image";
export default function WordCard(props) {
  const { word } = props;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <Link href={`/words/${word.slug}`}>
            <Image
              src={`/word-images/${word.coverImage}`}
              className="card-img-top img-fluid"
              alt={`Cover Image for: ${word.slug}`}
              width={860}
              height={360}
              loading="lazy"
            />
          </Link>
          <WordCardBody word={word} />
          <WordCardFooter word={word} />
        </div>
      </div>
    </>
  );
}
