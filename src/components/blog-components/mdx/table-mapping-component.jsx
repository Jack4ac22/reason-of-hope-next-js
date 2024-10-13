export default function TableMappingComponent(objectElement) {
  return (
    <>
      <table className="local-table">
        {objectElement.objectElement.children}
      </table>
    </>);
}