import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";
export default function PDFLink({ resource }) {
  return (
    <Link key={`${resource.title}`}
      className="resource-link" href={`publications/${resource.link}`}>
      <FaRegFilePdf/>
      <span className="ml-4 flex items-start flex-col leading-none">
        <span className="text-xs mr-2">PDF</span>
      </span>
    </Link>
  );
}