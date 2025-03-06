export default function ReferencePage({ params }) {
  const reference = {params};
  console.log(reference);
  return (
    <div>{reference}</div>
  );
}