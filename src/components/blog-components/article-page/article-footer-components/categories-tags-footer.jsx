import Link from "next/link";
export default function CatTagFooter({ article }) {
  const categories = article?.categories
  const tags = article?.tags
  return (
    <>
      <div className="px-4 print:hidden">
        <div className="flex flex-wrap justify-between mb-6">
          {categories && categories.length > 0 && (
            <div className="w-full md:w-1/2 flex-col items-center px-4 ml-auto print:hidden text-center">
              <span className="block text-blueGray-500 text-xl font-semibold mb-2 ">التصنيفات</span>
              <ul className="list-unstyled">
                {categories.map((category) => {
                  return (
                    <Link  key={categories.length + category} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-mainBrand-500 animate-all duration-200" href={`/categories/${category}`}>{category.replace(/-/g, " ")}</Link>
                  );
                })}
              </ul>
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0 print:hidden text-center">
              <span className="block text-blueGray-500 text-xl font-semibold mb-2 ">الوسوم</span>
              {tags.map((tag, index) => {
                return (
                  <Link  key={tags.length + tag} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-mainBrand-500 animate-all duration-200" href={`/tags/${tag}`}>{tag.replace(/-/g, " ")}</Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}