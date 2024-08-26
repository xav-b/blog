import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {
  theme: 'nord',
  // TODO: support theme https://rehype-pretty.pages.dev/#multiple-themes-dark-and-light-mode
}

const withMDX = createMDX({
  options: {
    // remarkPlugins: [],
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    // setting it to true breaks code highlighting
    mdxRs: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  headers() {
    return [
      {
        source: '/images/xavier-3d4cecf.jpg',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  redirects() {
    return [
      {
        source: '/essays/:nested*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
