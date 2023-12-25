import { useState, useEffect, use } from "react";
import PageTitle from "../../components/general-compenents/page-title";
import Link from "next/link";
import { getAllTagsCount } from "../../utilities/tags-functions";
import { replaceDashed } from "../../utilities/general-functions";

export default function AllTagsPage(props) {
  const [displayedTags, setDisplayedTags] = useState(props.tags);
  function handleTyping(e) {
    const typedText = e.target.value;
    const filteredTags = props.tags.filter((tag) =>
      tag.tag.includes(typedText)
    );
    setDisplayedTags(filteredTags);
  }

  return (
    <>
      <PageTitle
        title="جميع الوسوم"
        description={"جميع الوسوم المستخدمة في موقع سبب الرجاء."}
        image={"/blog_images/diary-968592_640.jpg"}
      />
      <section>
        {/* search bar for the tags */}
        <input
          type="text"
          className="form-control"
          placeholder="ابحث عن وسم"
          onChange={handleTyping}
        />
      </section>
      <section>
        <div className="row border border-rounded-3 py-3">
          {displayedTags.map((tag) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0"
              key={tag.tag}
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{replaceDashed(tag.tag)}</h3>
                  <p className="card-text">
                    {`يوجد ${tag.count} منشور مرتبط بهذا الوسم.`}
                  </p>
                  <Link href={`/tags/${tag.tag}`} className="btn btn-primary">
                    اقرأ مقالات هذا الوسم
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const tags = getAllTagsCount();
  return {
    props: {
      tags: [...tags],
    },
  };
}
