// import React from 'react'
// import Highlight from 'react-highlight'

import { Caption } from './caption'

export const Snippet = ({ children, scroll = true, raw, ...props }) => {
  // const lang = props['data-languaghe']

  return (
    <pre
      className={`
      my-4
      p-4
      text-sm
      bg-gray-800 text-white
      dark:bg-[#222] dark:text-gray-300
      rounded-lg
      ${scroll ? 'overflow-scroll' : 'whitespace-pre-wrap break-all overflow-hidden'}
    `}
    >
      {/* <div className={'code-header'}>{lang}</div> */}
      {children}
    </pre>
  )
}
