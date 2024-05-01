export default function LoadingSpinner({ children, props }) {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-red-700">

          <svg fill='none' className="w-8 h-8 animate-spin" viewBox="0 0 32 32">
            <path clip-rule='evenodd'
              d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
              fill='currentColor' fillRule='evenodd' />
          </svg>


          <div>{children}</div>
        </div>
      </div>
    </>
  )
}