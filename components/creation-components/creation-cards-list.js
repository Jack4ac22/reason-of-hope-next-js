import CreationCard from "./creation-card";
export default function CreationCardsList(props) {
  return (
    <>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {props.creations.map((creation) => {
          return (<CreationCard key={creation.slug} creation={creation} />);
        })}
      </section>
    </>
  );
}
