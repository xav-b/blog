import { getPosts } from '@/app/get-posts'
import config from '../config'

export async function GET() {
  const posts = await getPosts()
  const max = 100 // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${config.author.name}</title>
    <subtitle>Notes</subtitle>
    <link href="${config.url}/atom" rel="self"/>
    <link href="${config.url}"/>
    <updated>${posts[0].date}</updated>
    <id>${config.url}</id>
    <author>
      <name>${config.author.name}</name>
      <email>${config.author.email}</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/)
      if (!dateMatch) return ''
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="${config.url}/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`
    }, '')}
  </feed>`,
    {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    },
  )
}
