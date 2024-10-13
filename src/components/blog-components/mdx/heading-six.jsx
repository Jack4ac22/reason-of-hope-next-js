export default function HeadingSix({ objectElement }) {
  return (
    <>
      <h6 id={objectElement.children} className="mt-1 mb-2 mx-6 text-mainBrand-700 text-md">{objectElement.children}</h6>
    </>
  );
}