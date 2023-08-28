import CreationContentBody from "./creation-content-body";
import CreationContentHeader from "./creation-content-header";
export default function CreationContentPageComponent(props) {
  const { creation } = props;
  return (
    <>
      <article>
        <CreationContentHeader creation={creation} />
        <CreationContentBody creation={creation} />
      </article>
    </>
  );
}
