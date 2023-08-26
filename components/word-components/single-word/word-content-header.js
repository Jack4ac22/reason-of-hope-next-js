import Image from "next/image";
export default function WordContentHeader(props) {
  const { word } = props;
  return (
    <>
      <header className="container p-3">
        <div className="row">
          <div className="col align-self-center">
            <h1>{word.title}</h1>
          </div>
        </div>
      </header>
    </>
  );
}
