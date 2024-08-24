import { Callout, Link } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export const InfoCallout = ({ text = null, children }) => (
  <div className="py-6">
    <Callout.Root variant="surface" className="py-3">
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{text ?? children}</Callout.Text>
    </Callout.Root>
  </div>
)
