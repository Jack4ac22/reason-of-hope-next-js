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
  const [searchText, setSearchText] = useState("");

  function handleTyping(e) {
    const typedText = e.target.value;
    setSearchText(typedText);
    const filteredArticlesOnTitleSearch = articles.filter((article) =>
      article.title.includes(typedText)
    );
    // const filteredArticlesOnDescriptionSearch = articles.filter((article) =>
    //   article.description.includes(typedText)
    // );
    // const filteredArticlesOnContentSearch = articles.filter((article) =>
    //   article.content.includes(typedText)
    // );
    const filteredArticles = [
      ...filteredArticlesOnTitleSearch,
      // ...filteredArticlesOnDescriptionSearch,
      // ...filteredArticlesOnContentSearch,
    ];
    setDisplayedArticles(filteredArticles);
  }

  function handleOrderByChange(e) {
    const selectedOrder = e.target.value;
    let sortedArticles = [...displayedArticles];

    if (selectedOrder === "default") {
      sortedArticles = articles;
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
        <div class="input-group mb-3">
          {/* search bar for the Articles */}
          <input
            type="search"
            className="form-control"
            placeholder="ابحث عن منشور"
            onChange={handleTyping}
          />
          {/* dropdown list for ordering */}
          <select
            className="form-select"
            value={orderBy}
            onChange={handleOrderByChange}
          >
            <option value="dateDesc">التاريخ (تنازلي)</option>
            <option value="dateAsc">التاريخ (تصاعدي)</option>
            <option value="titleAsc">العنوان (تصاعدي)</option>
            <option value="titleDesc">العنوان (تنازلي)</option>
          </select>
        </div>

        <div className="row border border-rounded-3 py-3">
          {displayedArticles.length > 0 &&
            displayedArticles.map((article) => (
              <ArticleCard
                article={article}
                baseUrl=""
                key={article.slug + article.date}
              />
            ))}
          {displayedArticles.length == 0 && (
            <h3 className="text-center">
              لا يوجد مقالات مرتبطة ببحثك عن: {searchText}
            </h3>
          )}
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
