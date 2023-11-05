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
    },
    {
      title: "section_nav_item_one",
      arabicTitle: "القسم الأول",
      path: "/objections/section-1",
    },
    {
      title: "section_nav_item_two",
      arabicTitle: "القسم الثاني",
      path: "/objections/section-2",
    },
    {
      title: "section_nav_item_three",
      arabicTitle: "القسم الثالث",
      path: "/objections/section-3",
    },
    {
      title: "section_nav_item_four",
      arabicTitle: "القسم الرابع",
      path: "/objections/section-4",
    },
    {
      title: "section_nav_item_five",
      arabicTitle: "القسم الخامس",
      path: "/objections/section-5",
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
                    {page.arabicTitle}
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
