import { withHeadingId } from './utils'

export function H2({ children }) {
  return (
    // <h2 className="group font-bold text-xl my-8 relative">
    <h2 className="scroll-m-20 my-8 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {withHeadingId(children)}
    </h2>
  )
}
