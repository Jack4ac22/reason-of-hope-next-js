'use client';
import { usePathname } from "next/navigation";
import PageNavigationItem from "@/components/blog-components/ui/navigation/pages-navigation-item";

import diverse from "@/assets/images/blog/icons/diverse.png"
import logic from "@/assets/images/blog/icons/logic.png"
import studies from "@/assets/images/blog/icons/studies.png"
import words from "@/assets/images/blog/icons/words.png"
import devotions from "@/assets/images/blog/icons/devotions.png"
export default function DiverseNavbar() {
  const path = usePathname();
  const menue = [
    {
      title: "diverse",
      arabic_title: "متفرقات",
      href: "/diverse",
      logo: diverse
    },
    {
      title: "logic",
      arabic_title: "المنطق",
      href: "/logic",
      logo: logic
    },
    {
      title: "studies",
      arabic_title: "الدراسات",
      href: "/studies",
      logo: studies
    },
    {
      title: "words",
      arabic_title: "الكلمة والرسالة",
      href: "/words",
      logo: words
    },
    {
      title: "devotions",
      arabic_title: "التأملات",
      href: "/devotions",
      logo: devotions
    }
  ]
  return (
    <nav className='page-navigation'>
      {menue.map((item, index) => (
        <PageNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}