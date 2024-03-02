import Link from "next/link"
import logoImage from "@/assets/images/icons/roh-icon.png"
import Image from "next/image"

export default function LogoIcon() {
  return (
    <>
      <Link className="navbar-brand" href="/">
        <Image src={logoImage} alt="Website Logo" priority={true} className="img-fuild"/>
      </Link></>
  )
}