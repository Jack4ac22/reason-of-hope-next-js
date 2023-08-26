import WordCardsList from "../../components/word-components/word-cards-list";
import Link from "next/link";
import {
  getAllWords
} from "../../utilities/word-functions";

export default function AllWordPage(props) {
  return (
    <>

<WordCardsList words={props.allWords} />

      {/* <h1>all words</h1>
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
                      <Link href={`/word/${word.slug}`}>{word.title}</Link>
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
      </ul> */}
    </>
  );
}
export async function getStaticProps(props) {
  const wordslist = getAllWords();

  return {
    props: {
      allWords: wordslist,
    },
  };
}
