import Image from "next/image";
import Link from "next/link";
export default function CreationPagesList() {
  const pages = [
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
  return (
    <>
      <div className="container">
        <div className="row">
          {pages.map((page) => {
            return (
              <div key={page.title} className="col">
                <div className="container">
                  <div className="row">
                    <Link href={page.path}>
                      <div className="col">
                        <Image
                          src={page.icon}
                          alt={`icon of: ${page.title} page`}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="col">
                        <p className="h5">
                          {" "}
                          <span className="badge text-bg-light">
                            {page.arabicTitle}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
