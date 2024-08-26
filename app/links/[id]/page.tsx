export const runtime = 'edge'

import { headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import links from '@/app/config/links.json'

export default function Link({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { bot?: string }
}) {
  const link = links[params.id]

  if (link == null) {
    return notFound()
  }

  if (searchParams.bot || /bot/i.test(headers().get('user-agent') as string)) return <></>

  redirect(link.link)
}
