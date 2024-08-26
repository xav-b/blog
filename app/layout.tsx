import '@radix-ui/themes/styles.css'
import './globals.css'

import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { themeEffect } from './theme-effect'
import { Analytics } from './analytics'
import { Header } from './header'
import { Footer } from './footer'
import { doge } from './doge'
import config from './config'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    siteName: config.title,
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${config.author.twitter}`,
    creator: `@${config.author.twitter}`,
  },
  metadataBase: new URL(config.url),
}

// NOTE: is it used anywhere?
export const viewport = {
  themeColor: 'transparent',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body>
        <Theme>
          <main className="dark:text-gray-100 max-w-2xl m-auto p-6 pt-3 md:pt-6 min-h-screen">
            <Header />

            {children}
          </main>

          <Footer />
          <ThemePanel />
        </Theme>
        <Analytics />
      </body>
    </html>
  )
}
