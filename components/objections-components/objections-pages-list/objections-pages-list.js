import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ShareIt from "../../ui/share-it";
export default function ObjectionsPagesList() {
  const pages = [
    {
      title: "objections_nav_item_home",
      arabicTitle: "الإعتراضات",
      path: "/objections",
      coverImage: "",
      icon: "/blog-images/objections.png"
    },
    {
      title: "section_nav_item_one",
      arabicTitle: "القسم الأول: الكميّة",
      path: "/objections/section-1",
      coverImage: "",
      icon: "/blog-images/objectionsSectionOne.png"
    },
    {
      title: "section_nav_item_two",
      arabicTitle: "القسم الثاني: الأسماء",
      path: "/objections/section-2",
      coverImage: "",
      icon: "/blog-images/objectionsSectionTwo.png"
    },
    {
      title: "section_nav_item_three",
      arabicTitle: "القسم الثالث: التواقيت",
      path: "/objections/section-3",
      coverImage: "",
      icon: "/blog-images/objectionsSectionThree.png"
    },
    {
      title: "section_nav_item_four",
      arabicTitle: "القسم الرابع: الأسباب",
      path: "/objections/section-4",
      coverImage: "",
      icon: "/blog-images/objectionsSectionFour.png"
    },
    {
      title: "section_nav_item_five",
      arabicTitle: "القسم الخامس: التفاصيل",
      path: "/objections/section-5",
      coverImage: "",
      icon: "/blog-images/objectionsSectionFive.png"
    },
  ];
  const router = useRouter();
  const { asPath } = router;
  // console.log("the path is ----- " + asPath);
  return (
    <>
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          {pages.map((page) => {
            if (page.path !== asPath) {
              return (
                <>
                  <Link
                    className="nav-item nav-link link-body-emphasis align-self-center"
                    href={page.path}
                    key={page.title}
                  >
                     <Image
                      src={page.icon}
                      alt={`icon of: ${page.title} page`}
                      width={75}
                      height={75}
                    />
                    {/* {page.arabicTitle} */}
                  </Link>
                </>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
