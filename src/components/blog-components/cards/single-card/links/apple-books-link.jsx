
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function AppleBooksLink({ resource }) {
  return (
    <Link key={`${resource.title}`}
      className="resource-link" href={`${resource.link}`}>
      <FaApple />
      <span className="ml-4 flex items-start flex-col leading-none">
        <span className="text-xs mr-2">متجر أبل</span>
      </span>
    </Link>
  );
}