import Link from 'next/link'
export default function DesignPageLayout({ children }) {
  return (
    <>
      <nav>
        <ul className='flex flex-wrap'>
          <li>
            <Link href='/designs/l-01-utility-first' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center ">
              L1-utility-first
            </Link>
          </li>
          <li>
            <Link href='/designs/l-02-colors' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold w-full text-sm rounded-sm flex items-center justify-center">
              L-02-colors
            </Link>
          </li>
          <li>
            <Link href='/designs/l-03-container-spacing' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-03-container-spacing
            </Link>
          </li>
          <li>
            <Link href='/designs/l-04-typography' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-04-typography
            </Link>
          </li>
          <li>
            <Link href='/designs/l-05-sizing' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-05-sizing
            </Link>
          </li>
          <li>
            <Link href='/designs/l-06-layout-position' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-06-layout-position
            </Link>
          </li>
          <li>
            <Link href='/designs/l-07-backgrounds-shadows' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-07-backgrounds-shadows
            </Link>
          </li>
          <li>
            <Link href='/designs/l-08-borders' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-08-borders
            </Link>
          </li>
          <li>
            <Link href='/designs/l-09-filters' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-09-filters
            </Link>
          </li>
          <li>
            <Link href='/designs/l-10-interactivity' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-10-interactivity
            </Link>
          </li>
          <li>
            <Link href='/designs/l-11-breakpoints' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-11-breakpoints
            </Link>
          </li>
          <li>
            <Link href='/designs/l-12-columns' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-12-columns
            </Link>
          </li>
          <li>
            <Link href='/designs/l-13-flex' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-13-flex
            </Link>
          </li>
          <li>
            <Link href='/designs/l-14-grid' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-14-grid
            </Link>
          </li>
          <li>
            <Link href='/designs/l-15-transform-transition' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-15-transform-transition
            </Link>
          </li>
          <li>
            <Link href='/designs/l-16-animations' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-16-animations
            </Link>
          </li>
          <li>
            <Link href='/designs/l-17-customization' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-17-customization
            </Link>
          </li>
          <li>
            <Link href='/designs/l-18-dark-mode' className="bg-red-400 hover:bg-red-600 text-white m-2 p-1 font-bold text-sm rounded-sm flex items-center justify-center">
              L-18-dark-mode
            </Link>
          </li>
        </ul>
      </nav >
      {children}
    </>
  )
}