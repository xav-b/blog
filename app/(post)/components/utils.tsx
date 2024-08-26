import { Button } from '@radix-ui/themes'
import { Link2Icon } from '@radix-ui/react-icons'
import GithubSlugger from 'github-slugger'
import { Children } from 'react'

const slugger = new GithubSlugger()

export function withHeadingId(children) {
  return Children.map(children, (el) => {
    if (typeof el === 'string') {
      // by default generate an id
      let headingSlug = slugger.slug(el)
      let customIndex: number | undefined = el.length

      // look for custom heading id
      const re = /\[#([^\]]+)\]\s*$/m
      const match = el.match(re)
      if (match && match[1]?.length) {
        headingSlug = match[1]
        customIndex = match.index
      }

      // FIXME: I somehow cannot make the button to stay so we can click it for
      // the link. Using the heading itself is calling for troubles, and makes
      // it harder to select text if needed
      return (
        <span className="group relative">
          {/* create the clickable button */}
          <a
            style={{ textDecoration: 'none' }}
            className={`
                absolute
                py-1
                -left-[2.7rem]
                invisible
                group-hover:visible
              `}
            href={`#${headingSlug}`}
          >
            <Button variant="soft" color="gray" size="1" radius="large">
              <Link2Icon />
            </Button>
          </a>

          {/* anchor the link gets you to */}
          <a id={headingSlug} href={`#${headingSlug}`}>
            {/* Show actual heading and remove the custom ID at the end, if any */}
            {el.substring(0, customIndex)}
          </a>
        </span>
      )
    }

    return el
  })
}
