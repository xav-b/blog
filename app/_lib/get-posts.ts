import commaNumber from 'comma-number'
import postsData from '@/app/config/posts.json'
import redis from '@/app/_lib/redis'

interface PostConfig {
  id: string
  date: string
  title: string
  serie?: string | null
  external_link?: string | null
  publisher?: string | null
}

export interface Post extends PostConfig {
  views: number
  viewsFormatted: string
}

// shape of the HSET in redis
type Views = {
  [key: string]: string
}

export const getPosts = async (): Promise<Post[]> => {
  const allViews: null | Views = await redis.hgetall('views')

  // bind views to the manually configured posts
  const posts = postsData.posts.map((post: PostConfig): Post => {
    const views = Number(allViews?.[post.id] ?? 0)
    return {
      ...post,
      views,
      viewsFormatted: commaNumber(views),
    }
  })

  return posts
}
