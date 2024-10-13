export default function UnOrderedList({ objectElement }) {
  const object = objectElement;
  return (
    <ul className="list-disc list-inside md:m-5">
      {objectElement.children}
    </ul>
  );
}