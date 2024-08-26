import { withHeadingId } from './utils'

export function H3({ children }) {
  return (
    // <h3 className="group font-bold text-lg my-8 relative">
    <h3 className="scroll-m-20 my-8 text-2xl font-semibold tracking-tight">
      {withHeadingId(children)}
    </h3>
  )
}
