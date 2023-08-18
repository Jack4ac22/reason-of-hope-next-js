import getAllObjections from "../../utilities/objections-functions";

export default function AllObjectionPage({ allObjections }) {
  console.log(allObjections);
  return (
    <>
      <h1>all objections</h1>
    </>
  );
}
export async function getStaticProps() {
  const allObjections = await getAllObjections();

  return {
    props: {
      allObjections,
    },
  };
}
