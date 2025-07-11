export default function HeadingTwo({ objectElement }) {
  return (
    <>
      <h2 id={`${objectElement.children}`} className="mt-2 mb-4 mx-2 text-mainBrand-600 text-2xl">{objectElement.children}</h2>
      {/* TODO: add a share button after the h2 */}
    </>
  );
}