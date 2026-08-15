'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import config from '@/app/config'

export function Logo() {
  const pathname = usePathname()
  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {pathname === '/' ? (
        <span className="cursor-default pr-2">{config.author.name}</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          {config.author.name}
        </Link>
      )}
    </span>
  )
}
