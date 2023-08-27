import CreationCardFooter from "./creation-card-footer";
import CreationCardBody from "./creation-card-body";
import Link from "next/link";
import Image from "next/image";
export default function CreationCard(props) {
  const { creation } = props;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <Link href={`/creation/${creation.slug}`}>
            <Image
              src={`/blog-images/${creation.coverImage}`}
              className="card-img-top img-fluid"
              alt={`Cover Image for: ${creation.slug}`}
              width={860}
              height={360}
              loading="lazy"
            />
          </Link>
          <CreationCardBody creation={creation} />
          <CreationCardFooter creation={creation} />
        </div>
      </div>
    </>
  );
}
