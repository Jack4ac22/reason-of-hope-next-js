export default function CardSliderSkeleton() {
  return (<>
    <div className='w-72 h-96 border rounded-md relative flex-col items-center bg-lightShade-200 dark:bg-lightShade-800 animate-pulse pb-5'>
      {/* Card Header container */}
      <div className='w-full h-full p-1'>
        {/* Featured banner */}
        {/* Body */}
        <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md mb-2'></div>
        {/* date area on the end of the line*/}
        <div className="relativ w-24 h-6 mb-4">
          <div className='w-5/12 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 absolute left-2'></div>
        </div>
        {/* text area */}
        <div className='w-11/12 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2'></div>
        <div className='w-11/12 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2'></div>
        <div className='w-11/12 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2'></div>
        {/* Read more link */}
        <div className="absolute bottom-2 left-2 flex justify-between">
          <div className='w-24 h-8 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
        </div>
      </div>
    </div>
    {/* Simulated navigation dots */}
    <div className="flex justify-center items-center gap-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-3 w-3 bg-gray-400 rounded-full"
        />
      ))}
    </div>
  </>
  );
}
