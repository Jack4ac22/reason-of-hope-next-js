import {
  getWordsByCategory,
  getAllWordsTags,
  getWordsByTag,
} from "../../utilities/word-functions";

export default function AllWordPage(props) {
  return (
    <>
      <h1>all words</h1>
      <ul>
        {props.allWords.map((tagObject) => {
          return (
            <li key={tagObject.tag}>
              <h2>{tagObject.tag}</h2>
              <h3>{tagObject.list.length}</h3>
              <ul>
                {tagObject.list.map((word) => {
                  return (
                    <li key={word.title}>
                      <h4>{word.title}</h4>
                      <p>{word.content}</p>
                      <ul>
                        tags:
                        {word.tags.map((tag) => {
                          return <li key={tag}>{tag}</li>;
                        })}
                      </ul>
                      <ul>
                        categories:
                        {word.categories.map((category) => {
                          return (
                            <li key={category}>{category.replace("-", " ")}</li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const wordsArticles = getWordsByCategory("كلمة-ورسالة");
  const tags = getAllWordsTags();
  const wordslist = [];

  tags.forEach((tag) => {
    const list = getWordsByTag(tag.tag);
    // create a new tagObject tag, count, list
    tag.list = list;
    wordslist.push(tag);
  });
  // console.log("wordslist", wordslist);
  return {
    props: {
      allWords: wordslist,
    },
  };
}
