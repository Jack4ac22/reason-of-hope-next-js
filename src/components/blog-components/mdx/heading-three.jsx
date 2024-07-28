export default function HeadingThree({ objectElement }) {
  return (
    <>
      <h3 id={objectElement.children} className="mt-1 mb-2 mx-3 text-mainBrand-600 text-xl">{objectElement.children}</h3>
    </>
  );
}