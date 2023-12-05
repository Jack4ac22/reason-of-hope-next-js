import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ShareIt from "../../ui/share-it";
export default function PublicationsPagesList() {
  const pages = [
    {
      title: "publications_home",
      arabicTitle: "المنشورات",
      path: "/publications",
      coverImage: "",
      icon: "/blogImages/publications_home.png",
    },
    {
      title: "published_books",
      arabicTitle: "الكتب المُترجمة",
      path: "/publications/books",
      coverImage: "",
      icon: "/blogImages/publications.png",
    },
    {
      title: "published_studies",
      arabicTitle: "دراسات مُتنوعة",
      path: "/publications/studies",
      coverImage: "",
      icon: "/blogImages/studies.png",
    },
    {
      title: "published_sc",
      arabicTitle: "الديانات والطوائف",
      path: "/publications/cults",
      coverImage: "",
      icon: "/blogImages/cults_sects.png",
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
                    key={page.title.split(" ").join("-")}
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
        <ShareIt
          title="سبب الرجاء"
          url={`https://reasonofhope.com${asPath}`}
          description={`قضية الخلق وارتباطتها بالحياة المسيحية والتعاليم الكتابية`}
        />
      </div>
    </>
  );
}
