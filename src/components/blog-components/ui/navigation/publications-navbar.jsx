import PageNavigationItem from "@/components/blog-components/ui/navigation/pages-navigation-item";

import publicationsLogo from "@/assets/images/blog/publicatoins-navbar-images/allPublications.png";
import cultsLogo from "@/assets/images/blog/publicatoins-navbar-images/cultsSects.png";
import studiesLogo from "@/assets/images/blog/publicatoins-navbar-images/studies.png";
import translatedBooksLogo from "@/assets/images/blog/publicatoins-navbar-images/translatedBooks.png";

export default function PublicationsNavbar() {
  const menue = [
    {
      title: "publications",
      arabic_title: "المنشورات",
      href: "/publications",
      logo: publicationsLogo
    },
    {
      title: "cults-sects",
      arabic_title: "الديانات والطوائف",
      href: "/publications/cults",
      logo: cultsLogo
    },
    {
      title: "studies",
      arabic_title: "دراسات كتابية",
      href: "/publications/studies",
      logo: studiesLogo
    },
    {
      title: "translated-books",
      arabic_title: "الكتب المترجمة",
      href: "/publications/books",
      logo: translatedBooksLogo
    }
  ]

  return (
    <nav className='flex flex-wrap items-center justify-center'>
      {menue.map((item, index) => (
        <PageNavigationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </nav>
  );
}