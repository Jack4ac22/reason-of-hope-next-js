import Image from 'next/image'
import Link from 'next/link'

import logo from "@/assets/images/icons/roh-icon.png"

import { FiMessageCircle } from "react-icons/fi";
import { BiNotification } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";


export default function BootstrapNavigator(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light ">
        {/* messages */}
        <button type="button" className="btn position-relative">
          <FiMessageCircle />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        {/* profile */}
        <div className="dropdown">
          <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            < CgProfile />
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">profil</a></li>
            <li><a className="dropdown-item" href="#">logout</a></li>
          </ul>
        </div>
        {/* notifications */}
        <div className="dropdown">
          <button className="btn possition=relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <BiNotification />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
              <span className="visually-hidden">number of new notifications</span>
              <span className="visually-hidden"> notifications</span>
            </span>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">notifications</a></li>
            <li><a className="dropdown-item" href="#">mark as read</a></li>
          </ul>
        </div>
        <Link className="nav-link active" href="/">Home</Link>
        <Link className="nav-link" href="/translations">translations</Link>
        <Link className="nav-link" href="/translations/add">new translations</Link>
        <Image src={logo} className='img-fluid' alt="logo" />
      </nav >

      
    </>)
}