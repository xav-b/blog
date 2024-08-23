import { notFound } from 'next/navigation'
import links from '@/links.json'
import config from '@/config'

export default function LinkHead({ params }: { params: { id: string } }) {
  const link = links[params.id]

  if (link == null) return notFound()

  return (
    <>
      <meta property="og:title" content={link.title} />
      <meta property="og:site_name" content={config.author.name} />
      <meta property="og:description" content={link.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.author.twitter} />
      <meta property="og:image" content={`${config.url}/og/${link.image}`} />
    </>
  )
}
