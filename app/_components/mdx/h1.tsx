import { withHeadingId } from './utils'

export function H1({ children }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-1">
      {withHeadingId(children)}
    </h1>
  )
}
