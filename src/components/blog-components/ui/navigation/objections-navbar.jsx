import PageNavigationItem from "@/components/blog-components/ui/navigation/pages-navigation-item";

import objectionsLogo from "@/assets/images/blog/objections-navbar-images/objections.png"
import sectionOneLogo from "@/assets/images/blog/objections-navbar-images/objectionsSectionOne.png"
import sectionTwoLogo from "@/assets/images/blog/objections-navbar-images/objectionsSectionTwo.png"
import sectionThreeLogo from "@/assets/images/blog/objections-navbar-images/objectionsSectionThree.png"
import sectionFourLogo from "@/assets/images/blog/objections-navbar-images/objectionsSectionFour.png"
import sectionFiveLogo from "@/assets/images/blog/objections-navbar-images/objectionsSectionFive.png"
export default function ObjectionsNavbar() {
  const menue = [
    {
      title: "objections",
      arabic_title: "الإعتراضات",
      href: "/objections",
      logo: objectionsLogo
    },
    {
      title: "section-1",
      arabic_title: "القسم الأول",
      href: "/objections/section-1",
      logo: sectionOneLogo
    },
    {
      title: "section-2",
      arabic_title: "القسم الثاني",
      href: "/objections/section-2",
      logo: sectionTwoLogo
    },
    {
      title: "section-3",
      arabic_title: "القسم الثالث",
      href: "/objections/section-3",
      logo: sectionThreeLogo
    },
    {
      title: "section-4",
      arabic_title: "القسم الرابع",
      href: "/objections/section-4",
      logo: sectionFourLogo
    },
    {
      title: "section-5",
      arabic_title: "القسم الخامس",
      href: "/objections/section-5",
      logo: sectionFiveLogo}
  ]

  return (
    <nav className='flex flex-wrap items-center justify-center'>
      {menue.map((item, index) => (
        <PageNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}