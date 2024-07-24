
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
export default function GoogleBooksLink({ resource }) {
  return (
    <Link key={`${resource.title}`}
    className="resource-link" href={`${resource.link}`}>
      <FaGoogle />
      <span className="ml-4 flex items-start flex-col leading-none">
        <span className="text-xs mr-2">متجر غوغل</span>
      </span>
    </Link>
  );
}