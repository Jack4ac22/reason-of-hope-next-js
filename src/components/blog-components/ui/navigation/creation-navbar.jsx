'use client';

import { usePathname } from "next/navigation";


import Image from 'next/image';
import Link from 'next/link';

import biblicalWorldLogo from '@/assets/images/blog/creation-navbar-images/biblical-world.png';
import creationGospleLogo from '@/assets/images/blog/creation-navbar-images/creation-gospel.png';
import creationLogo from '@/assets/images/blog/creation-navbar-images/creation-homepage.png';
import dinoDatingLogo from '@/assets/images/blog/creation-navbar-images/dino-dating.png';
import evolutionEithicsLogo from '@/assets/images/blog/creation-navbar-images/evolution-ethics.png';
import modernScinceLogo from '@/assets/images/blog/creation-navbar-images/modern-scince.png';
export default function CreationNavbar() {
  const menue = [
    {
      title: "Creation",
      arabic_title: "قضية الخلق",
      href: "/creation",
      logo: creationLogo
    },
    {
      title: "Biblical World",
      arabic_title: "العالم التوراتي",
      href: "/creation/biblical-world",
      logo: biblicalWorldLogo
    },
    {
      title: "Creation Gospel",
      arabic_title: "الكتاب المقدس والإنجيل",
      href: "/creation/creation-gospel",
      logo: creationGospleLogo
    },
    {
      title: "Dino Dating",
      arabic_title: "الديناصورات والتأريخ",
      href: "/creation/dino-dating",
      logo: dinoDatingLogo
    },
    {
      title: "Modern Science",
      arabic_title: "علوم معاصرة",
      href: "/creation/modern-science",
      logo: modernScinceLogo
    },
    {
      title: "Evolution Ethics",
      arabic_title: "التطور ونتائجه",
      href: "/creation/evolution-ethics",
      logo: evolutionEithicsLogo
    },
  ]

  const path = usePathname();
  console.log(path);


  function CreationNavigationItem({ item }) {
    return (
      <div className='flex flex-col items-center justify-center' >
        <Link href={item.href} >
          <Image src={item.logo} alt={item.title} className="w-20 h-20 md:w-24 md:h-24" />
          <span className="sr-only">{item.title}</span>
        </Link>
      </div>
    )
  }
  return (
    <nav className='flex flex-wrap items-center justify-center'>
      {menue.map((item, index) => (
        path === item.href ?
          null : <CreationNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}