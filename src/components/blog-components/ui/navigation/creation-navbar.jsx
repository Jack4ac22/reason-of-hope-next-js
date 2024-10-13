import PageNavigationItem from "@/components/blog-components/ui/navigation/pages-navigation-item";

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

  return (
    <nav className='page-navigation print:hidden'>
      {menue.map((item, index) => (
        <PageNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}