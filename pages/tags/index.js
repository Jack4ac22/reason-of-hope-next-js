import Link from "next/link";
import { getAllTagsCount } from "../../utilities/tags-functions";
export default function AllTagsPage(props) {
  return (
    <>
      <h2>{props.tags.length}</h2>
    </>
  );
}
export async function getStaticProps() {
  const tags = getAllTagsCount();
  return {
    props: {
      tags: [...tags],
    },
  };
}
