import WordContentBody from "./word-content-body";
import WordContentHeader from "./word-content-header";
export default function WordContentPageComponent(props) {
  const { word } = props;
  return (
    <>
      <WordContentHeader word={word} />
      <WordContentBody word={word} />
    </>
  );
}
