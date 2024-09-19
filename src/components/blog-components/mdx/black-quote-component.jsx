export default function BQuoteComponent(objectElement) {
  return (
    <blockquote className="uni-text-color text-lg indent-3 text-wrap">
      {objectElement.children}
    </blockquote>
  );
}