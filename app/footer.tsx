import { A } from './_components/mdx/a'
import config from './config'

const copyright = () => `© ${new Date().getFullYear()} ${config.author.name}`

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">{copyright()}</div>
      <div>
        <A target="_blank" href={config.source}>
          Source
        </A>
      </div>
    </footer>
  )
}
