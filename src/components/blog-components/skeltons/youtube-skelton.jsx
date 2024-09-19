export default function YoutubeSkelton() {
  return (
    <div className='flex justify-between items-center'>
      <div className='w-full md:w-1/2'>
        <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse'></div>
      </div>
      <div className='w-full md:w-1/3'>
        <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse'></div>
      </div>
    </div>
  );
}