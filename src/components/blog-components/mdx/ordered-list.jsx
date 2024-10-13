export default function OrderedList({ objectElement }) {
  return (
    <ol className="list-decimal list-inside md:m-5" style={{ listStyleType: 'arabic-indic' }}>
      {objectElement.children}
    </ol>
  );
}