"use client";
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import logoImage from "@/assets/images/blog/ROH.png"
import Image from 'next/image'
import { usePathname } from "next/navigation";
import Link from 'next/link';


export default function NavBar() {
  const path = usePathname();
  const menue = [
    { title: "Home", href: "/", active: true, smallScreen: true },
    { title: "About", href: "/about", active: true, smallScreen: true },
    { title: "articles", href: "/articles", active: true, smallScreen: true },
    {
      title: "Projects", href: "/projects", active: true, smallScreen: true, subElements: [
        { title: "Project 1", href: "/projects/project-1", active: true, smallScreen: true },
        { title: "Project 2", href: "/projects/project-2", active: true, smallScreen: true },
        { title: "Project 3", href: "/projects/project-3", active: true, smallScreen: true },
      ]
    },
  ];


  function MenueLogo() {
    return (
      <Link className="flex flex-shrink-0 items-center hover:translate-y-0.5 duration-300" href="/">
        <Image
          className="h-10 w-auto ml-2"
          src={logoImage}
          alt="Reason Of Hope Logo"
          priority={true}
        />
      </Link>
    );
  }
  function SmMenueButton({ handleMobileMenuOpen }) {
    return (
      <button
        type="button"
        id="mobile-dropdown-button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:brightness-90 hover:text-white focus:outline-none"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={handleMobileMenuOpen}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>  <FaBars className="h-6 w-6 " aria-hidden="true" />
      </button>
    );
  }

  function DeskTopNavItem({ menueElement }) {
    if (menueElement.active === false) return null;
    return (
      <Link
        href={menueElement.href}
        className={`text-white hover:outline hover:brightness-90 hover:text-white rounded-md px-3 py-2 dark:bg-lightAccent-500 dark:lightAccent-500
          ${path === menueElement.href ? 'underline underline-offset-4 decoration-lightAccent-500 decoration-wavy dark:decoration-darkAccent-500'
            : ''}`}
      >{menueElement.title}
      </Link>
    );
  }

  function SmNavItem({ menueElement }) {
    if (menueElement.smallScreen === false || menueElement.active === false) return null;
    return (
      <Link
        href={menueElement.href}
        className={`text-white hover:outline hover:brightness-90 hover:text-white rounded-md px-3 py-2 dark:bg-lightAccent-500 dark:lightAccent-500
          ${path === menueElement.href ? 'underline underline-offset-4 decoration-lightAccent-500 decoration-wavy dark:decoration-darkAccent-500'
            : ''}`}
        onClick={handleMobileMenuLinkClick}
      >{menueElement.title}</Link>
    );
  }



  // menue open and close state for mobile and profile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  }
  return (
    <nav className="bg-darkAccent-500 border-darkAccent-500 dark:bg-lightAccent-500 dark:lightAccent-500 border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <SmMenueButton handleMobileMenuOpen={handleMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
          </div>
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <MenueLogo />
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                {
                  menue.map((menueElement, index) => (
                    <DeskTopNavItem key={index} menueElement={menueElement} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (<div className='md:hidden' id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
          {
            menue.map((menueElement, index) => (
              <SmNavItem key={index} menueElement={menueElement} />
            ))
          }
        </div>
      </div>)}
    </nav>
  )
}
