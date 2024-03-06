'use client'
import { useState } from "react";
import Link from "next/link"
import MenuSubElement from "@/components/ui/navbar/nav-elements/main-list/menu-sub-elements"
import { TbMenuOrder } from "react-icons/tb";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";


export default function MenuElement(props) {
  // TODO: check the path if it matches the current page then assigne the active class to the link
  // TODO:
  const [itemClicked, setItemClicked] = useState(false)
  // console.log(itemClicked)
  return (
    <>
      <li className={`nav-item ${itemClicked ? "active-sub-element" : ""}`} key={`${props.element_key ?? props.link + props.text}`} >
        <Link href={props.link} className="nav-link" >
          {props.text}
        </Link>
        {props.sub_links && !itemClicked && (
          <MdOutlineExpandMore className="m-1" onClick={() => setItemClicked(!itemClicked)} />
        )}
        {props.sub_links && itemClicked && (
          <MdOutlineExpandLess className="m-1" onClick={() => setItemClicked(!itemClicked)} />
        )}
        {props.sub_links && itemClicked && (
          <MenuSubElement sub_links={props.sub_links} id="sub-element" />
        )}
      </li>
      <style jsx>{`
        .active-sub-element {
          color: blue;
          background-color: white;
          padding: 10px;
          font-family: Arial;
        }

      `}</style>
    </>
  )
}