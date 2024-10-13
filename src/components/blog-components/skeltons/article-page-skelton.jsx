export default function ArticlePageSkelton() {
  return (
    <main className="flex justify-center uni-text-color dark:uni-text-color-dark">
      <div className="m-8 w-full md:max-w-2xl">
        {/* <!-- Header Section --> */}
        <header>
          <div className="flex flex-col items-center">
            <div className="my-3 h-10 w-3/4 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse items-center md:justify-between">
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>
          <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 animate-pulse mt-2"></div>
        </header>

        {/* <!-- Article Body Section --> */}
        <div className="px-2">
          <div className="article-body">
            <div className="uni-text-color indent-3 text-wrap h-6 bg-gray-300 dark:bg-gray-700 animate-pulse mb-4"></div>
            <ul className="list-disc list-inside md:m-5">
              <li className="oldstyle-nums h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></li>
              <li className="oldstyle-nums h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></li>
            </ul>
            <div className="uni-text-color indent-3 text-wrap h-6 bg-gray-300 dark:bg-gray-700 animate-pulse mb-4"></div>

            {/* <!-- Image Figure --> */}
            <figure className="my-2 mx-auto block w-full md:max-w-2xl">
              <div className="object-cover w-full h-64 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg"></div>
              <figcaption className="figure-caption text-break uni-text-color text-center border-b border-double h-6 bg-gray-300 dark:bg-gray-700 animate-pulse mt-2"></figcaption>
            </figure>

            {/* <!-- Subsections --> */}
            <div id="section-id" className="mt-2 mb-4 mx-2 text-mainBrand-600 dark:text-mainBrand-400 text-2xl h-8 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="uni-text-color indent-3 text-wrap h-6 bg-gray-300 dark:bg-gray-700 animate-pulse mb-4"></div>
          </div>
        </div>

        {/* <!-- Related Articles Section --> */}
        <div className="flex justify-center">
          <div className="flex-col">
            <div className="text-2xl text-center font-bold mt-4 h-8 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="flex-col w-72">
              <div className="w-72 m-2 relative">
                <div className="animate-smoothlyAppear">
                  <div className="m-2 w-72 h-96 border rounded-md relative flex-col items-center bg-lightShade-200 dark:bg-darkShade-200">
                    <div className="w-full h-full p-1">
                      <div className="object-cover w-full h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-t-md mb-2"></div>
                      <div className="flex-col items-center justify-center h-40 m-2">
                        <div className="h-6 mb-2 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                      </div>
                      <div className="absolute bottom-3 right-2 py-2 px-8 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}