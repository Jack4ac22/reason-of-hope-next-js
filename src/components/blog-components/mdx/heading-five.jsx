export default function HeadingThree({ objectElement }) {
  return (
    <>
      <h5 id={objectElement.children} className="mt-1 mb-2 mx-5 text-mainBrand-600 text-md">{objectElement.children}</h5>
    </>
  );
}