import './globals.css'

import { Inter } from 'next/font/google'
import { themeEffect } from './theme-effect'
import { Analytics } from './analytics'
import { Header } from './header'
import { Footer } from './footer'
import { doge } from './doge'
import config from './config'

const inter = Inter({ subsets: ['latin'] })

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

export const viewport = {
  themeColor: 'transparent',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />

          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
