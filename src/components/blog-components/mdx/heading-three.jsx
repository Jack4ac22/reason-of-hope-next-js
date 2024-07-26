export default function HeadingThree({ objectElement }) {
  return (
    <>
      <h3 id={objectElement.children} className="mt-2 mb-4 mx-2 text-mainBrand-600 text-2xl inline-block">{objectElement.children}</h3>
      {/* TODO: add a share button after the h1 */}
    </>
  );
}