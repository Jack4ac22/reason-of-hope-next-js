import {
  getAllTagsCount,
  getAllTagsarticles,
} from "../../utilities/tags-functions";
export default function AllTagsPage(props) {
  return (
    <>
      <h2>tags with count</h2>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag.tag}>
            <span>{tag.tag}</span>
            <span>: </span>
            <span>{tag.count}</span>
          </li>
        ))}
      </ul>

      <h1>all tags</h1>
      <ul>
        {props.allTags.map((creationArticle) => (
          <li key={creationArticle.tag}>
            <span>{creationArticle.tag}</span>
            <span>: </span>
            <span>{creationArticle.count}</span>
            <ul>
              {/* check if there is articles before mapping them */}
              {creationArticle.articles.publication.length > 0 && (
                <h4>publication</h4>
              )}
              {creationArticle.articles.publication.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.word.length > 0 && <h4>word</h4>}
              {creationArticle.articles.word.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.logic.length > 0 && <h4>logic</h4>}
              {creationArticle.articles.logic.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
              {creationArticle.articles.objection.length > 0 && (
                <h4>objection</h4>
              )}
              {creationArticle.articles.objection.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}

              {creationArticle.articles.creation.length > 0 && (
                <h4>creation</h4>
              )}
              {creationArticle.articles.creation.map((article) => (
                <li key={article.slug}>
                  <span>{article.title}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const tags = getAllTagsCount();
  const allTags = getAllTagsarticles();
  return {
    props: {
      allTags: [...allTags],
      tags: [...tags],
    },
  };
}
