export default function OrderedList({ objectElement }) {
  const object = objectElement;
  return (
    <ol className="list-decimal list-inside md:m-5">
      {objectElement.children}
    </ol>
  );
}