import WordCard from "./word-card";
export default function WordCardsList(props) {
  return (
    <>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {props.words.map((word) => {
          return (<WordCard key={word.slug} word={word} />);
        })}
      </section>
    </>
  );
}
