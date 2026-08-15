import { A as a } from 'app/_components/mdx/a'
import { P as p } from 'app/_components/mdx/p'
import { H1 as h1, H2 as h2, H3 as h3 } from 'app/_components/mdx/h'
import { OL as ol } from 'app/_components/mdx/ol'
import { UL as ul } from 'app/_components/mdx/ul'
import { LI as li } from 'app/_components/mdx/li'
import { HR as hr } from 'app/_components/mdx/hr'
import { Code as code } from 'app/_components/mdx/code'
import { Tweet } from 'app/_components/mdx/tweet'
import { Image } from 'app/_components/mdx/image'
import { Figure } from 'app/_components/mdx/figure'
import { Snippet } from 'app/_components/mdx/snippet'
import { Caption } from 'app/_components/mdx/caption'
import { InfoCallout } from 'app/_components/mdx/callout'
import { YouTube } from 'app/_components/mdx/youtube'
import { Ref, FootNotes, FootNote } from 'app/_components/mdx/footnotes'
import { Blockquote as blockquote } from 'app/_components/mdx/blockquote'

export function useMDXComponents(components: { [component: string]: React.ComponentType }) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Tweet,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout: InfoCallout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  }
}
