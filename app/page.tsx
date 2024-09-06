import { Suspense } from 'react'
import { Tabs, Box, Text } from '@radix-ui/themes'
import PostsTable from '@/app/_components/ui/posts-table'
import { getPosts } from '@/app/_lib/get-posts'

export const revalidate = 60

export default async function Home() {
  const posts = await getPosts()

  return (
    <Suspense fallback={null}>
      <main className="max-w-3xl font-mono m-auto mb-10 text-sm">
        <Tabs.Root defaultValue="posts">
          <Tabs.List>
            <Tabs.Trigger value="posts">Posts</Tabs.Trigger>
            <Tabs.Trigger value="talks">Talks</Tabs.Trigger>
            <Tabs.Trigger value="hof">Hall Of Fame</Tabs.Trigger>
          </Tabs.List>

          <Box pt="4">
            <Tabs.Content value="posts">
              <PostsTable posts={posts} />
            </Tabs.Content>

            <Tabs.Content value="talks">
              <Text size="2">To be imported - stay tuned.</Text>
            </Tabs.Content>

            <Tabs.Content value="hof">
              <Text size="2">To be imported - stay tuned.</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </main>
    </Suspense>
  )
}
