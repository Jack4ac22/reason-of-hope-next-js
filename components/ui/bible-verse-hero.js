/**
 * Renders a Bible verse hero component.
 * @param {Object} props - The props object.
 * @param {string} props.body - The body of the Bible verse.
 * @param {string} props.reference - The reference of the Bible verse.
 * @param {string} props.translation - The translation of the Bible verse.
 * @returns {JSX.Element} The Bible verse hero component.
 */
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
