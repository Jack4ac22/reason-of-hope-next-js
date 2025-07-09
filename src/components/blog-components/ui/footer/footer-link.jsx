import Link from "next/link"
export default function FooterLinks(title, href) {
  return (
    <li key={title + href}>
      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-mainBrand-500 animate-all duration-200" href={href}>{title}</Link>
    </li>
  )
}