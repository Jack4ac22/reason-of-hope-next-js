import Link from "next/link";
import { getAllTagsCount } from "../../utilities/tags-functions";
export default function AllTagsPage(props) {
  return (
    <>
      <h2>tags with count</h2>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag.tag}>
            <Link href={`/tags/${tag.tag}`}>
              <span>{tag.tag}</span>
              <span>: </span>
              <span>{tag.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps(props) {
  const tags = getAllTagsCount();
  return {
    props: {
      tags: [...tags],
    },
  };
}
