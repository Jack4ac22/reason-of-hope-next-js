export default function BibleVerseHero(props) {
  return (
    <>
      <div className="px-1 py-1 my-1 text-center">
        <figure className="m-5">
          <blockquote className="blockquote">
            <p>{props.body}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {props.reference}
            <cite title="Source Title">{` - ${props.translation}`}</cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
