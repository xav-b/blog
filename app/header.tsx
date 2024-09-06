import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { ThemeToggle } from './_components/ui/theme-toggle'
import { Logo } from './_components/ui/logo'
import Link from 'next/link'
import config from './config'

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
        <ThemeToggle />
        <Link
          href="/about"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
        <a
          href={config.author.connect}
          target="_blank"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
        >
          <LinkedInLogoIcon style={{ marginRight: 4 }} /> Connect
          {/* <ChatBubbleIcon style={{ marginRight: 4 }} /> Hire Me */}
        </a>
      </nav>
    </header>
  )
}
