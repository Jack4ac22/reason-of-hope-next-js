import { parseBibleReferenceRange } from "@/utils/bible/parsing"
import { getVersesFromParsedReference } from "@/utils/bible/bible-references";
export default function ReferencePage({ params }) {
  const { version, reference } = params;
  const referenceDetails = parseBibleReferenceRange(reference[0]);
  console.log(referenceDetails)
  const verses = getVersesFromParsedReference(referenceDetails, version);
  // console.log(verses);
  return (
    <>
      <h1>ReferencePage</h1>
      <div>{reference}</div>
      <div>{JSON.stringify(referenceDetails)}</div>
      <div>
        {verses.map((verse) => (
          <div key={verse.vhapter + verse.vnumber}>{verse._text}</div>
        ))}
      </div>

    </>
  );
}