import { FaXTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import Link from 'next/link';
export default function MainFooter() {
  const socialLinks = [
    // { title: 'X', icon: <FaXTwitter />, link: '#' },
    { title: 'facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/ReasonOfHope/', color: 'hover:text-blue-500' },
    { title: 'youtube', icon: <FaYoutube />, link: 'https://www.youtube.com/@ReasonOfHope', color: 'hover:text-red-500' },
    { title: "whatsapp", icon: <FaWhatsapp />, link: "https://whatsapp.com/channel/0029Va9m2Tw7IUYVEc3rjU0X", color: 'hover:text-green-500' },
  ];

  const usefullLinks = [
    { title: "إيماننا", href: "/our-faith", active: true, smallScreen: true },
    { title: "اتصل بنا", href: "/contact", active: true, smallScreen: true },
    { title: "من نحن", href: "/about", active: true, smallScreen: true },
    { title: "الأقسام", href: "/categories", active: true, smallScreen: true },
    { title: "الوسوم", href: "/tags", active: true, smallScreen: true },
    { title: "جميع المنشورات", href: "/all", active: true, smallScreen: true },

  ];
  const otherResources = [
    // {
    //   title: "مواقع مفيدة", href: "/usefull", active: true, smallScreen: true
    // },
    // {
    //   title: "مشاريعنا", href: "/soon", active: true, smallScreen: true
    // },
    // {
    //   title: "كيف أساعد؟", href: "/support-us", active: true, smallScreen: true
    // },
    // {
    //   title: "تقييم", href: "/feedback", active: true, smallScreen: true
    // }
  ];

  function SocialLink(title, link, icon, color) {
    return (
      <Link className={`m-2 p-3 shadow-lg items-center justify-center align-center rounded-full text-center ${color} animate-all duration-200`} href={link} target='_blank' rel='noopener nor eferrer' key={link}>
        {icon}
        <span className="sr-only">Visit our {title}</span>
      </Link>
    )
  }

  function FooterLinks(title, href) {
    return (
      <li key={title + href}>
        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-mainBrand-500 animate-all duration-200" href={href}>{title}</Link>
      </li>
    )
  }
  return (
    <footer className="uni-text-color mt-12 select-none">
      <hr className=" border-blueGray-300" />
      <section className="flex justify-center items-center h-full">
        <div className="container mx-auto px-4">

          <div className="flex flex-wrap mt-4">
            {/* contact/social media section */}
            <div className="w-full md:w-6/12 px-4 print:hidden">
              <h3 className="text-xl font-semibold">فلنبقى على تواصل!</h3>
              <div className="lg:mb-0 mb-6 flex">
                {/* social media links */}
                {socialLinks.map((item, index) => (
                  SocialLink(item.title, item.link, item.icon, item.color)
                ))}
              </div>
            </div>


            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">

                {/* usefull links  */}
                {usefullLinks.length > 0 &&
                  (<div className="w-full lg:w-4/12 px-4 ml-auto print:hidden">
                    <h3 className="block text-blueGray-500 text-xl font-semibold mb-2">روابط سريعة</h3>
                    <ul className="list-unstyled">
                      {usefullLinks.map((item) => FooterLinks(item.title, item.href))}
                    </ul>
                  </div>
                  )}
                {/* other resources */}
                {otherResources.length > 0 &&
                  (<div className="w-full lg:w-4/12 px-4 mt-4 md:mt-0 print:hidden">
                    <span className="block text-blueGray-500 text-xl font-semibold mb-2 ">روابط إضافية</span>
                    <ul className="list-unstyled">
                      <ul className="list-unstyled">
                        {otherResources.map((item) => FooterLinks(item.title, item.href))}
                      </ul>
                    </ul>
                  </div>)}
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