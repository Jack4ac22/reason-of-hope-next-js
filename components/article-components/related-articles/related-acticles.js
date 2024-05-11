import AutoplayingCarousel from "../../general-compenents/carousels/Autoplaying-carousels";
import ArticleCardsList from "../../general-compenents/cards-list/acrticles-cards-list";
export default function RelatedArticles(props) {
  const article = props.article;
  return (
    <>
      {article.related && (
        <section>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-7 col-lg-5 align-self-center">
                <hr />
                <h3>مواضيع أخرى</h3>
                <AutoplayingCarousel
                  articles={article.related}
                  id={article.slug}
                  baseUrl={""}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
