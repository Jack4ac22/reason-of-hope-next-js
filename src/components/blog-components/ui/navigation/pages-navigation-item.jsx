'use client';

import { usePathname } from "next/navigation";

import Image from 'next/image'
import Link from 'next/link'

export default function PageNavigationItem({ item }) {
  const path = usePathname();

  return (
    <div className={`flex flex-col items-center justify-center ${path === item.href ? '  ' : ''}`} >
      <Link href={item.href} >
        <Image src={item.logo} alt={item.title} className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
        <span className="sr-only">{item.title}</span>
      </Link>
    </div>
  )
}