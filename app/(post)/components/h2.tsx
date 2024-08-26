import { Heading } from '@radix-ui/themes'

import { withHeadingId } from './utils'

export function RawH2({ children }) {
  return (
    <h2 className="scroll-m-20 my-8 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {withHeadingId(children)}
    </h2>
  )
}

export function H2({ children }) {
  return (
    <Heading as="h2" size="7" weight="medium" className="my-8 border-b">
      {withHeadingId(children)}
    </Heading>
  )
}
