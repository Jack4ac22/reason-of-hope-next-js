export default function FallaciesListSkelton() {
  return (
    <section className="border-y-2 border-spacing-2 m-4">
      <h3 className="article-footer-headings mb-4 bg-gray-300 dark:bg-gray-700 h-6 w-2/3 animate-pulse"></h3>
      <ol className="list-decimal space-y-6">
        {[...Array(2)].map((_, index) => (
          <li key={index} className="space-y-2">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 animate-pulse w-1/2 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse w-3/4 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse w-2/3 rounded"></div>
            <div className="mt-3 w-full h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
