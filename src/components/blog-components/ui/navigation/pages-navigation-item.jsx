'use client';

import { usePathname } from "next/navigation";

import Image from 'next/image'
import Link from 'next/link'

export default function PageNavigationItem({ item }) {
  const path = usePathname();

  return (
    <div className={`flex flex-col items-center justify-center print:hidden ${path === item.href ? ' border-b-2 ' : ''}`} >
      <Link href={item.href} aria-label={item.title}>
        <Image src={item.logo} alt={`icone for ${item.title} page`} className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
      </Link>
    </div>
  )
}