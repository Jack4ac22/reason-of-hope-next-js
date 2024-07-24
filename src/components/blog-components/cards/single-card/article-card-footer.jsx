import Link from "next/link";
import ResourcesIcons from "@/components/blog-components/cards/single-card/resources-icons";

export default function ArticleCardFooter({ article }) {
  const categoriesList = article.categories.map((category, index) => {
    return {
      "title": category,
      "link": `/categories/${category}`
    }
  });
  const tagsList = article.tags.map((tag, index) => {
    return {
      "title": tag,
      "link": `/tags/${tag}`
    }
  });
  const combinedList = [...categoriesList, ...tagsList];
  if (!article.isBook) {
    return (
      <div className="group absolute bottom-0 flex flex-nowrap overflow-x-scroll
    w-full my-2
    bg-lightShade bg-opacity-15">
        {
          combinedList.map((item, index) => {
            return (
              <Link href={item.link} key={`${index}_${item.title}`} className="">
                <span className="inline-flex items-center m-2 px-3 py-1 text-nowrap text-sm
              bg-darkAccent text-darkShade
              rounded-full">
                  <span className="ml-1">
                    {item.title.replace(/-/g, ' ')}
                  </span>
                </span>
              </Link>
            )
          })}
      </div>
    );
  } else {
    return (
      <>
        <div className="group absolute bottom-0 flex flex-nowrap overflow-x-scroll
    w-full my-2
    bg-lightShade bg-opacity-15">
          <ResourcesIcons article={article} />
        </div>
      </>
    )
  }
}