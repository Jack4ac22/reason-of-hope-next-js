import Link from "next/link";
import { getAllCategoriesCount } from "../../utilities/categories-functions";
import { useState, useEffect, use } from "react";
import PageTitle from "../../components/general-compenents/page-title";
import { replaceDashed } from "../../utilities/general-functions";

export default function AllCategoriesPage(props) {
  const [displayedCategories, setDisplayedCategories] = useState(
    props.categories
  );
  function handleTyping(e) {
    const typedText = e.target.value;
    const filteredCategories = props.categories.filter((category) =>
      category.category.includes(typedText)
    );
    setDisplayedCategories(filteredCategories);
  }

  return (
    <>
      <PageTitle
        title="جميع الفئات"
        description={"جميع الفئات المستخدمة في موقع سبب الرجاء."}
        image={"/blog_images/diary-968592_640.jpg"}
      />
      <section className=" py-3">
        {/* search bar for the categories */}
        <input
          type="text"
          className="form-control"
          placeholder="ابحث عن فئة"
          onChange={handleTyping}
        />
      </section>
      <section>
        <div className="row  py-3">
          {displayedCategories.map((category) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 my-3"
              key={category.category}
            >
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {replaceDashed(category.category)}
                  </h4>
                  <p className="card-text">
                    {`يوجد ${category.count} منشور مرتبط بهذه الفئة.`}
                  </p>
                  <Link
                    href={`/categories/${category.category}`}
                    className="btn btn-primary"
                  >
                    اقرأ مقالات هذا الفئة
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
export async function getStaticProps(props) {
  const categories = getAllCategoriesCount();
  return {
    props: {
      categories: [...categories],
    },
  };
}
