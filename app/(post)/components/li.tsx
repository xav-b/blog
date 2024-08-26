import { Text, Flex, Checkbox } from '@radix-ui/themes'

const CheckLI = ({ children, isChecked = false }) => (
  <Flex as="span" gap="3" style={{ alignItems: 'center' }}>
    <Checkbox size="2" variant="soft" defaultChecked={isChecked} />
    {children}
  </Flex>
)

// we use `[ul_&]` prefix for the <UL> variety
/**
 * Render list or checklists - assuming `remark-gfm` is enabled.
 *
 * This means `children` can be either a simple string (just text of list), or
 * an array of strings and react nodes (in case of checklists already
 * transformed by GFM or even just because there's some bold or links in there).
 *
 * So the fucntion tries to replace the ugly GFM checkboxes (rest of the parser
 * being pretty useful) and leave everything else rendered as is.
 *
 * FIXME: The text of checklist is inconsistent
 */
export function LI({ children }) {
  // make children a consistent array, even if that's one string
  if (typeof children === 'string') children = [children]

  if (children[0].props?.type === 'checkbox')
    return (
      <CheckLI isChecked={children[0].props.checked}>{children.slice(1, children.length)}</CheckLI>
    )

  return <li>{children}</li>
}
