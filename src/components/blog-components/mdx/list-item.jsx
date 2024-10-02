export default function ListItem({ objectElement }) {
  const uniqueKey = `${objectElement.tagName}-${objectElement.children.length}`;
  return (
    <li className="oldstyle-nums" key={uniqueKey}>{objectElement.children}</li>
  );
}