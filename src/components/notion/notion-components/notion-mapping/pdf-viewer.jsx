import Iframe from "react-iframe";
export default function PdfViewer({ url, height = "400px", title = "PDF Viewer" }) {
  if (!url) return <p className="text-red-500">No PDF URL provided.</p>;

  return (
    <div className="w-full my-4">
      <Iframe
        src={url}
        title={title}
        width="100%"
        height={height}
        className="border rounded shadow-md"
        loading="lazy"
      />
    </div>
  );
}
