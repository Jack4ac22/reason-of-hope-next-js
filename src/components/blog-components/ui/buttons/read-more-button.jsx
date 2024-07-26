import Link from 'next/link'
export default function ReadMoreButton({ link, buttonColor, ariaDescription, children }) {
  return (
    <Link href={link || '/'} aria-label={ariaDescription || 'Read more'}>
      <button className={`
      py-2 px-8
      flex mx-auto 
      focus:outline-none hover:bg-mainBrand-600 bg-mainBrand-500 dark:bg-mainBrand-200 dark:hover:bg-mainBrand-100
      border-0 rounded
      text-white dark:text-black
        `}>
        {children}
      </button>
    </Link>
  )
}
