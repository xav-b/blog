# Personal Website

This is the blog that powers `xavierbruhiere.com`, built on
[next.js](https://nextjs.org/) and deployed to the cloud via
[Vercel](https://vercel.com).

Forked from https://github.com/rauchg/blog - all credits to `@rauchg`.

## How to run

First, install [Vercel CLI](https://vercel.com/download) and
[pnpm](https://pnpm.io/installation).

- `pnpm install`
- `npm run build`
- Development with Vercel: `vc dev`, or without it: `npm run dev`

### Deployment

- Staging: `vc` - _This is the equivalent of submitting a PR with the [GitHub integration](https://vercel.com/github)_
- Production: `vc --prod` - _This is the equivalent of `git push` to `master` (or merging a PR to master)_

---

## Usage

### Write a post

1. Start a new file, e.g. `app/(posts)/2024/develop-preview-test/page.mdx` (there's also an example rendered at /playground)
2. Content should be something like:

```mdx
export const metadata {
  title: 'Develop, Preview, Test',
  description:
    "In this essay I want to make the case that prioritizing end-to-end (E2E) testing for the critical parts of your app will reduce risk and give you the best return. Further, I'll show how you can adopt this methodology in mere minutes.",
  openGraph: {
    title: 'Develop, Preview, Test',
    description:
      "In this essay I want to make the case that prioritizing end-to-end (E2E) testing for the critical parts of your app will reduce risk and give you the best return. Further, I'll show how you can adopt this methodology in mere minutes.",
    images: [{ url: '/og/develop-preview-test' }],
  },
}

<br />

# Some titme [#title]

Bla bla bla...
```

3. For that new entry to show up on the homepage, update `app/config/posts.json`

```json
{
  "posts": [
    {
      "id": "develop-preview-test",
      "serie": null,
      "date": "April 11, 2024",
      "title": "Develop, Preview, Test"
    }
  ]
}
```

### Count views

The blog uses Redis to store and retrieve article views, and therefor needs to
environment variables:

```console
export UPSTASH_REDIS_REST_URL="https://some-random-12345.upstash.io"
export UPSTASH_REDIS_REST_TOKEN="****"
```

If those settings are not found or invalid, Redis client will be swapped with a
mock and the feature disabled.

## Architecture

```console
app/
├── _components              # mdx and ui styling
├── _lib                     # features like view count
├── (post)                   # actual writing
├── about                    # /about page
├── page.tsx                 # / home page
├── services                 # /services page
├── analytics.tsx            # Vercel analytics
├── api
├── atom
├── config                   # customise blog, theme, settings
├── footer.tsx
├── globals.css
├── header.tsx
├── icon.png
├── layout.tsx
├── links
├── opengraph-image.tsx
└── theme-effect.ts
```

### Pure components

Every stateless pure component is found under `./app/_components`.

Every component that has to do with styling the post's markup
is in fact imported in `mdx-components.ts` at the root.

These components make up the _style guide_ of the application.

### Blog posts

Every blog post is a static page hosted under `pages/$year/`.

This allows every post to load arbitrary modules, have custom layouts
and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the
rest of the site.

An index of all posts is maintained in JSON format as `./posts.json`
for practical reasons.

Other features:
- Automated headins IDs and links

---

## Todo

- [ ] Tweet embed is broken

## Resources

### Inspiration

- https://www.joshwcomeau.com/
