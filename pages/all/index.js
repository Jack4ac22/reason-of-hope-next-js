import { getAllBlogArticles } from "../../utilities/articles-functions";
import { useState } from "react";
import ArticleCard from "../../components/general-compenents/cards-list/article-card";
import PageTitle from "../../components/general-compenents/page-title";
import ArticleCardsList from "../../components/general-compenents/cards-list/acrticles-cards-list";

export default function AllArticlesPage(props) {
  const { articles, slug } = props;
  const pagetitle = `جميع المقالات`;
  const pagedescription = `جميع المقالات التي تمَّ نشرها`;
  const [displayedArticles, setDisplayedArticles] = useState(articles);
  const [orderBy, setOrderBy] = useState("default");

  function handleTyping(e) {
    const typedText = e.target.value;
    const filteredArticles = articles.filter((article) =>
      article.title.includes(typedText)
    );
    setDisplayedArticles(filteredArticles);
  }

  function handleOrderByChange(e) {
    const selectedOrder = e.target.value;
    let sortedArticles = [...displayedArticles];

    if (selectedOrder === "default") {
      // No sorting
    } else if (selectedOrder === "titleAsc") {
      sortedArticles.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOrder === "titleDesc") {
      sortedArticles.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedOrder === "dateAsc") {
      sortedArticles.sort((a, b) => a.date.localeCompare(b.date));
    } else if (selectedOrder === "dateDesc") {
      sortedArticles.sort((a, b) => b.date.localeCompare(a.date));
    }

    setDisplayedArticles(sortedArticles);
    setOrderBy(selectedOrder);
  }

  return (
    <>
      <PageTitle
        title={pagetitle}
        description={pagedescription}
        image={"/blog_images/diary-968592_640.jpg"}
      />
      <section className="py-3">
        {/* search bar for the Articles */}
        <input
          type="text"
          className="form-control"
          placeholder="ابحث عن منشور"
          onChange={handleTyping}
        />

        {/* dropdown list for ordering */}
        <select
          className="form-select my-3"
          value={orderBy}
          onChange={handleOrderByChange}
        >
          <option value="default">الترتيب الافتراضي</option>
          <option value="titleAsc">العنوان (تصاعدي)</option>
          <option value="titleDesc">العنوان (تنازلي)</option>
          <option value="dateAsc">التاريخ (تصاعدي)</option>
          <option value="dateDesc">التاريخ (تنازلي)</option>
        </select>

        <div className="row border border-rounded-3 py-3">
          <ArticleCardsList articles={displayedArticles} />
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const articles = getAllBlogArticles();

  return {
    props: {
      articles: articles,
    },
    revalidate: 30000,
  };
}