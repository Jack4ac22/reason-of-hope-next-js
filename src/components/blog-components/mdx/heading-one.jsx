export default function HeadingOne({ objectElement }) {
  return (
    <>
      <h1 id={objectElement.children} className="mt-2 mb-4 mx-2 text-mainBrand-500 text-4xl inline-block">{objectElement.children}</h1>
      {/* TODO: add a share button after the h1 */}
    </>
  );
}