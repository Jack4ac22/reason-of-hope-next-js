export default function HeadingFour({ objectElement }) {
  return (
    <>
      <h4 id={objectElement.children} className="mt-1 mb-2 mx-4 text-mainBrand-600 text-lg">{objectElement.children}</h4>
    </>
  );
}