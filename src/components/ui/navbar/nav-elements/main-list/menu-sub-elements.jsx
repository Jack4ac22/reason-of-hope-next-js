import Link from "next/link"
export default function MenuSubElement(props) {
  return (
    <>
      <ul className="navbar-nav me-auto">
        {props.sub_links.map((item) => {
          return (
            <li className="nav-item" key={item.key}>
              <Link href={item.link
              } className="nav-link">
                {item.text}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </>
  )
}