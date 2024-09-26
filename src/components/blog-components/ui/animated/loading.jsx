export default function LoadingComponent() {
  return (
    <div className='flex space-x-2 justify-center items-center bg-white h-[80vh] dark:invert mt-0'>
      <span className='sr-only'>
        Loading...
      </span>
      <span className="sr-only">Loading...</span>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
    </div>
  );
}