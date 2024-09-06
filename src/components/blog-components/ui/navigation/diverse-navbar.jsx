'use client';
import { usePathname } from "next/navigation";
import PageNavigationItem from "@/components/blog-components/ui/navigation/pages-navigation-item";

import placeholderLogo from "@/assets/images/blog/icons/www.png"
export default function DiverseNavbar() {
  const path = usePathname();
  const menue = [
    {
      title: "diverse",
      arabic_title: "متفرقات",
      href: "/diverse",
      logo: placeholderLogo
    },
    {
      title: "logic",
      arabic_title: "المنطق",
      href: "/logic",
      logo: placeholderLogo
    },
    {
      title: "studies",
      arabic_title: "الدراسات",
      href: "/studies",
      logo: placeholderLogo
    },
    {
      title: "words",
      arabic_title: "الكلمة والرسالة",
      href: "/words",
      logo: placeholderLogo
    },
  ]
  return (
    <nav className='page-navigation'>
      {menue.map((item, index) => (
        <PageNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}