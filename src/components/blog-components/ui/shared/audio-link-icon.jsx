import Link from "next/link";
export default function AudioLinkIcon({ title, link, hoverEffect = true, children }) {
  return (
    <div className="relative group w-min h-min pt-5 group-hover:shadow-xl flex flex-col items-center my-2 rounded-full p-1 duration-200">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
      {hoverEffect &&
        (<span className="absolute p-0 top-0 bg-lightShade-700 text-center bg-opacity-70 rounded-xl text-mainBrand-500 font-bold group-hover:p-1">
          <span className="top-0-0 sr-only group-hover:not-sr-only">{title}</span>
        </span>)
      }
    </div>
  );
}
