import {
  getAllArticlesByTag,
  getAllTagsCount,
} from "../../../utilities/tags-functions";
import { replaceDashed } from "../../../utilities/general-functions";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../../components/general-compenents/page-title";

export default function TagArtilePage(props) {
  const { articles, slug } = props;
  const pagetitle = `الوسم: ${replaceDashed(slug)}`;
  const pagedescription = `جميع المقالات التي تمَّ نشرها تحت وسم: ${replaceDashed(
    slug
  )}`;
  const [displayedArticles, setDisplayedArticles] = useState(articles);
  // console.log(displayedArticles);
  function handleTyping(e) {
    const typedText = e.target.value;
    const filteredArticles = articles.filter(
      (article) =>
        article.title.includes(typedText) ||
        article.description.includes(typedText)
    );
    setDisplayedArticles(filteredArticles);
  }

  return (
    <>
      <PageTitle
        title={pagetitle}
        description={pagedescription}
        image={"/blog_images/diary-968592_640.jpg"}
      />
      <section className=" py-3">
        {/* search bar for the Articles */}
        <input
          type="text"
          className="form-control"
          placeholder="ابحث عن منشور ضمن هذا الوسم"
          onChange={handleTyping}
        />
      </section>
      <section className="py-3">
        <div className="row border border-rounded-3 py-3">
          {displayedArticles.map((article) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-3 mb-sm-0"
              key={article.title}
            >
              <div className="card">
                <div className="card-body">
                  <Image
                    src={`/blog_images/${article.coverImage}`}
                    width={300}
                    height={200}
                    className="card-img-top rounded-3 fluid"
                    style={{ objectFit: "fit" }}
                  />
                  <h3 className="card-title">{replaceDashed(article.title)}</h3>
                  <p className="card-text">{article.description}</p>
                  <Link
                    href={`/tags/${article.slug}`}
                    className="btn btn-primary"
                  >
                    اقرأ هذا المنشور
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

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const articles = getAllArticlesByTag(slug);
  return {
    props: {
      articles: articles,
      slug: slug,
    },
    revalidate: 30000,
  };
}
export async function getStaticPaths() {
  const tags = getAllTagsCount();
  const slugs = tags.map((tag) => tag.tag);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
