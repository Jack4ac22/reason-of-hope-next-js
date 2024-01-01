import { replaceDashed } from "../../../utilities/general-functions";
import { useState } from "react";
import {
  getAllCategoriesCount,
  getAllArticlesByCategory,
} from "../../../utilities/categories-functions";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../../components/general-compenents/page-title";
import ArticleCard from "../../../components/general-compenents/cards-list/article-card";
import ArticleCardsList from "../../../components/general-compenents/cards-list/acrticles-cards-list";

export default function AllCategoriesPage(props) {
  const { articles, slug } = props;
  const pagetitle = `الفئة: ${replaceDashed(slug)}`;
  const pagedescription = `جميع المقالات التي تمَّ نشرها ضمن فئة: ${replaceDashed(
    slug
  )}`;
  const [displayedArticles, setDisplayedArticles] = useState(articles);
  function handleTyping(e) {
    const typedText = e.target.value;
    const filteredArticles = articles.filter((article) =>
      article.title.includes(typedText)
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
          placeholder="ابحث عن منشور ضمن هذه الفئة"
          onChange={handleTyping}
        />
      </section>
      <section className="py-3">
        <div className="row border border-rounded-3 py-3">
          <ArticleCardsList articles={displayedArticles} />
          {/* {displayedArticles.map((article) => (
            <ArticleCard article={article} baseUrl="" />
          ))} */}
        </div>
      </section>
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const articles = getAllArticlesByCategory(slug);

  return {
    props: {
      articles: articles,
      slug: slug,
    },
    revalidate: 30000,
  };
}
export async function getStaticPaths() {
  const categories = getAllCategoriesCount();
  const slugs = categories.map((category) => category.category);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
