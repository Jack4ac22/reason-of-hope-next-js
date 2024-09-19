export default function MediaPlayersHeaderSkeleton() {
  return (
    <>
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
      <div className='mb-4 text-xl text-center font-bold underline underline-offset-8'>
        <div className='w-1/3 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mx-auto'></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='w-full md:w-1/2'>
          <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse'></div>
        </div>
        <div className='w-full md:w-1/3'>
          <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse'></div>
        </div>
      </div>
      <hr className="my-6 h-0.5 border-t-0 invert uni-background" />
    </>
  );
}
