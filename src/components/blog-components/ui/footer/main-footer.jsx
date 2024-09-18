import { FaXTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import Link from 'next/link';
export default function MainFooter() {
  const socialLinks = [
    { title: 'X', icon: <FaXTwitter />, link: '#' },
    { title: 'facebook', icon: <FaFacebook />, link: '#' },
    { title: 'youtube', icon: <FaYoutube />, link: '#' },
    { title: "whatsapp", icon: <FaWhatsapp />, link: "#" },
  ];

  const usefullLinks = [
    { title: "إيماننا", href: "/our-faith", active: true, smallScreen: true },
    { title: "اتصل بنا", href: "/contact", active: true, smallScreen: true },];
  const otherResources = [];

  function SocialLink(title, link, icon) {
    return (
      <Link className="m-2 p-3 shadow-lg items-center justify-center align-center rounded-full text-center" href={link} target='_blank' rel='noopener nor eferrer' key={link}>
        {icon}
        <span className="sr-only">Visit our {title}</span>
      </Link>
    )
  }

  function FooterLinks(title, href) {
    return (
      <li key={title + href}>
        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={href}>{title}</Link>
      </li>
    )
  }
  return (
    <footer className="">
      <section className="flex justify-center items-center h-full">
        <div className="container mx-auto px-4">

          <div className="flex flex-wrap">
            {/* contact/social media section */}
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">فلنبقى على تواصل!</h4>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                {/* social media links */}
                {socialLinks.map((item, index) => (
                  SocialLink(item.title, item.link, item.icon)
                ))}
              </div>
            </div>


            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">

                {/* usefull links  */}
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">روابط سريعة</span>
                  <ul className="list-unstyled">
                    {usefullLinks.map((item) => FooterLinks(item.title, item.href))}
                  </ul>
                </div>
                {/* other resources */}
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">روابط أٌخرى</span>
                  <ul className="list-unstyled">

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />
          {/* Copyright section */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright <Link href="https://www.linkedin.com/in/kazanjyan/">ReasonOfHope</Link> © 2024
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}