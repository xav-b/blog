import { Heading } from '@radix-ui/themes'
import { withHeadingId } from './utils'

export function H1({ children }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-1">
      {withHeadingId(children)}
    </h1>
  )
}

export function H2({ children }) {
  return (
    <Heading as="h2" size="7" weight="medium" className="my-8 border-b">
      {withHeadingId(children)}
    </Heading>
  )
}

export function H3({ children }) {
  return (
    // <h3 className="group font-bold text-lg my-8 relative">
    <h3 className="scroll-m-20 my-8 text-2xl font-semibold tracking-tight">
      {withHeadingId(children)}
    </h3>
  )
}
