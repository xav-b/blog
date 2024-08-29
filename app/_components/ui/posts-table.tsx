'use client'

import { Badge, Tooltip } from '@radix-ui/themes'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Post } from '@/app/_lib/get-posts'

type SortSetting = ['date' | 'views', 'desc' | 'asc']

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const getYear = (date: string) => new Date(date).getFullYear()

function ExternalBadge({ post }: { post: Post }) {
  if (!post.external_link) return null

  const url = new URL(post.external_link)

  return (
    <Tooltip content={`This article was originally published on ${url.hostname}`} maxWidth="180px">
      <Badge variant="soft" color="cyan">
        {post.publisher}
      </Badge>
    </Tooltip>
  )
}

function List({ posts, sort }: { posts: Post[]; sort: SortSetting }) {
  // sort can be ["date", "desc"] or ["views", "desc"] for example
  const sortedPosts = useMemo(() => {
    const [sortKey, sortDirection] = sort
    return [...posts].sort((a, b) => {
      if (sortKey === 'date') {
        return sortDirection === 'desc'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime()
      } else {
        return sortDirection === 'desc' ? b.views - a.views : a.views - b.views
      }
    })
  }, [posts, sort])

  return (
    <ul>
      {sortedPosts.map((post, i: number) => {
        const year = getYear(post.date)
        const firstOfYear = !sortedPosts[i - 1] || getYear(sortedPosts[i - 1].date) !== year
        const lastOfYear = !sortedPosts[i + 1] || getYear(sortedPosts[i + 1].date) !== year

        return (
          <li key={post.id}>
            <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`}>
              <span
                className={`flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
                ${!firstOfYear ? 'border-t-0' : ''}
                ${lastOfYear ? 'border-b-0' : ''}
              `}
              >
                <span className={`py-3 flex grow items-center ${!firstOfYear ? 'ml-14' : ''}`}>
                  {firstOfYear && (
                    <span className="w-14 inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                      {year}
                    </span>
                  )}

                  <span className="grow dark:text-gray-100">{post.title}</span>

                  <span className="text-gray-500 dark:text-gray-500 text-xs">
                    {post.external_link ? <ExternalBadge post={post} /> : post.viewsFormatted}
                  </span>
                </span>
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function PostsTable({ posts: initialPosts }) {
  const [sort, setSort] = useState<SortSetting>(['date', 'desc'])
  const { data: posts } = useSWR('/api/posts', fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000,
  }) as { data: Post[] }

  function sortDate() {
    // if the sorting is using views, use `desc`
    // otherwise just toggle date sorting direction
    setSort((sort) => ['date', sort[0] !== 'date' || sort[1] === 'asc' ? 'desc' : 'asc'])
  }

  function sortViews() {
    setSort((sort) => [
      sort[0] === 'views' && sort[1] === 'asc' ? 'date' : 'views',
      sort[0] !== 'views' ? 'desc' : sort[1] === 'asc' ? 'desc' : 'asc',
    ])
  }

  return (
    <>
      <header className="text-gray-500 dark:text-gray-600 flex items-center text-xs">
        <button
          onClick={sortDate}
          className={`w-12 h-9 text-left  ${
            sort[0] === 'date' && sort[1] !== 'desc' ? 'text-gray-700 dark:text-gray-400' : ''
          }`}
        >
          date
          {sort[0] === 'date' && sort[1] === 'asc' && '↑'}
        </button>
        <span className="grow pl-2">title</span>
        <button
          onClick={sortViews}
          className={`
                  h-9
                  pl-4
                  ${sort[0] === 'views' ? 'text-gray-700 dark:text-gray-400' : ''}
                `}
        >
          views
          {sort[0] === 'views' ? (sort[1] === 'asc' ? '↑' : '↓') : ''}
        </button>
      </header>

      <List posts={posts} sort={sort} />
    </>
  )
}
