import Link from "next/link";
import { getAllTagsCount } from "../../utilities/tags-functions";
export default function AllTagsPage(props) {
  return (
    <>
      <h2>tags with count</h2>
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
