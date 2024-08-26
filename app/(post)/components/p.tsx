import { Text } from '@radix-ui/themes'

export function P({ children }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

// FIXME: letter spacing and line height are just not as designed ass above -
// but not using `Text` means theming won't work as expected
export function oldP({ children }) {
  return (
    <Text as="p" mb="5" size="3">
      {children}
    </Text>
  )
}
