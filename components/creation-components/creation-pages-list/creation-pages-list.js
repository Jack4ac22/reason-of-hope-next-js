import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ShareIt from "../../ui/share-it";
export default function CreationPagesList() {
  const pages = [
    {
      title: "creation home",
      arabicTitle: "قضية الخلق",
      path: "/creation",
      icon: "/creation-pages-images/creation-homepage.png",
      coverImage: "",
    },
    {
      title: "Biblical World",
      arabicTitle: "العالم التوراتي",
      path: "/creation/biblical-world",
      icon: "/creation-pages-images/biblical-world.png",
      coverImage: "",
    },
    {
      title: "Creation Gospel",
      arabicTitle: "الكتاب المقدس والإنجيل",
      path: "/creation/creation-gospel",
      icon: "/creation-pages-images/creation-gospel.png",
      coverImage: "",
    },
    {
      title: "Dino and Dating",
      arabicTitle: "الديناصورات والتأريخ",
      path: "/creation/dino-dating",
      icon: "/creation-pages-images/dino-dating.png",
      coverImage: "",
    },
    {
      title: "Modern Scince",
      arabicTitle: "علوم معاصرة",
      path: "/creation/modern-scince",
      icon: "/creation-pages-images/modern-scince.png",
      coverImage: "",
    },
    {
      title: "Evolution and ethics",
      arabicTitle: "التطور ونتائجه",
      path: "/creation/evolution-ethics",
      icon: "/creation-pages-images/evolution-ethics.png",
      coverImage: "",
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
          url={`https://reasonofhope.org${asPath}`}
          description={`قضية الخلق وارتباطتها بالحياة المسيحية والتعاليم الكتابية`}
        />
      </div>
    </>
  );
}
