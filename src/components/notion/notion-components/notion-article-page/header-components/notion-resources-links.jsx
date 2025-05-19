import { FaFilePdf, FaGoogle, FaArchive, FaApple } from "react-icons/fa";
import { FcKindle } from "react-icons/fc";

import Link from "next/link";

export default function NotionResourcesLinks({ article }) {
  let resources = []
  article.pdf && resources.push({ title: "pdf", link: article.pdf });
  article.epub && resources.push({ title: "epub", link: article.epub });
  article.archive && resources.push({ title: "archive", link: article.archive });
  article.appleBooks && resources.push({ title: "appleBooks", link: article.appleBooks });
  article.googleBooks && resources.push({ title: "googleBooks", link: article.googleBooks });
  const filteredResources = resources.filter((resource) => resource.link);

  if (!filteredResources.length) return null;
  function ResourceLinkIcon({ title, link, children }) {
    return (
      <div className="relative group w-min h-min pt-5 group-hover:shadow-xl flex flex-col items-center my-2 rounded-full p-1 duration-200">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
        <span className="absolute p-0 top-0 bg-lightShade-700 text-center bg-opacity-70 rounded-xl text-mainBrand-500 font-bold group-hover:p-1">
          <span className="top-0-0 sr-only group-hover:not-sr-only">{title}</span>
        </span>
      </div>
    );
  }

  return (
    <div className='flex-col my-3  print:hidden'>
      <p className="text-lg font-bold sm:text-center">
        يُمكنكم الحصول على هذا المنشور من خلال المنصات التالية:
      </p>
      <div className="flex flex-wrap justify-center content-center items-center">
        {filteredResources.map((resource, index) => {
          const { title, link } = resource;
          if (title === "pdf") {
            return (
              <div key={`${title}-${index}`}>
                <ResourceLinkIcon title={title} link={`/publications/${link}`}>
                  <FaFilePdf className="text-4xl mx-2" />
                </ResourceLinkIcon>
              </div>
            )
          }
          if (title === "epub") {
            return (
              <div key={`${title}-${index}`}>
                <ResourceLinkIcon title={title} link={`/publications/${link}`}>
                  <FcKindle className="text-4xl mx-2" />
                </ResourceLinkIcon>
              </div>
            )
          }
          if (title === "archive") {
            return (
              <div key={`${title}-${index}`}>
                <ResourceLinkIcon title={title} link={`/publications/${link}`}>
                  <FaArchive className="text-4xl mx-2" />
                </ResourceLinkIcon>
              </div>
            )
          }
          if (title === "googleBooks") {
            return (
              <div key={`${title}-${index}`}>
                <ResourceLinkIcon title={title} link={link}>
                  <FaGoogle className="text-4xl mx-2" />
                </ResourceLinkIcon>
              </div>
            )
          }
          if (title === "appleBooks") {
            return (
              <div key={`${title}-${index}`}>
                <ResourceLinkIcon title={title} link={link}>
                  <FaApple className="text-4xl mx-2" />
                </ResourceLinkIcon>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
}