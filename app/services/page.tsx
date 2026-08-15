import { RadioCards, Button, Text, Strong, Flex, Box, Card, Inset } from '@radix-ui/themes'
import { H2, H3 } from '@/app/_components/mdx/h'
import { HR } from '@/app/_components/mdx/hr'
import { P } from '@/app/_components/mdx/p'
import { slugify } from '@/app/_lib/utils'
import { RocketIcon } from '@radix-ui/react-icons'

const PLACEHOLDER_IMG =
  'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'

const SERVICES = [
  {
    name: 'Product Architecture',
    body: 'Choose the tech and services for your trade-offs. Implement services and CICD that work.',
    cover:
      'https://learn.g2.com/hubfs/G2CM_FI542_Learn_Article_Images_%5BFree_Home_Design_Software%5D_V1b.png',
  },
  {
    name: 'Data-intensive API',
    body: 'Serve data that is correct, secured and high performance - pick 3.',
    cover: 'https://blog.treblle.com/content/images/2024/03/treblle-platform-2.png',
  },
  {
    name: 'Two Pizza Team',
    body: 'Put together extremely fast, extremely lean software engineering team(s)',
    cover:
      'https://www.sweetprocess.com/wp-content/uploads/2021/07/virtual-team-building-activities-28.png',
  },
  {
    name: 'Bespoke',
    body: 'Mentoring, freelancing, career coaching - leverage my 12+ years of experience',
    cover:
      'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087459/cover_image/retina_1708x683/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-c9ad0b13aebad8c872bec7fa59b307f6.png',
  },
]

const OFFERING = [
  { title: 'Consulting', body: 'No BS advising' },
  { title: 'Project', body: 'Let me ship it' },
  { title: 'Training', body: 'Half-day workshop' },
]

function ServiceCard({ cover = PLACEHOLDER_IMG, children }) {
  return (
    <Box maxWidth="280px">
      <Card size="3">
        <Inset clip="padding-box" side="top">
          <img
            src={cover}
            alt="Bold typography"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Inset>
        <div className="mt-5">
          <P>{children}</P>
        </div>
      </Card>
    </Box>
  )
}

function ServiceVariant({ title, body }) {
  return (
    <RadioCards.Item value={slugify(title)}>
      <Flex direction="column" width="100%">
        <Text weight="bold">{title}</Text>
        <Text>{body}</Text>
      </Flex>
    </RadioCards.Item>
  )
}

export default async function Page() {
  return (
    <article className="text-gray-800 dark:text-gray-300 my-25">
      <H2>Freelancing</H2>
      <P>
        Over the last decade I boarded companies to help them thrive through uncertain economies. Be
        it a new idea needing revenue, startups looking to scale their models or established
        corporations eyeing on more agile and agressive models.
        <br />
        <br />
        They untrusted me to{' '}
        <Strong>
          hire their engineers, architect their stack and collaborate with their teams to build
          solid products
        </Strong>
        . Across advertising, commodity markets, e-commerce and now back in fintech, I developed
        genuine communication, strategic thinking and tech expertise in the areas below 👇
      </P>

      <Flex gap="8" wrap="wrap" justify="center" className="mt-12">
        {SERVICES.map((s) => (
          <ServiceCard key={slugify(s.name)} cover={s.cover}>
            <H3>{s.name}</H3>
            {s.body}
          </ServiceCard>
        ))}
      </Flex>

      <HR />

      <Flex gap="8" wrap="wrap" justify="center" className="my-8">
        <RadioCards.Root defaultValue="consulting" columns={{ initial: '1', sm: '3' }} size="2">
          {OFFERING.map((o, idx) => (
            <ServiceVariant key={`offering-${idx}`} title={o.title} body={o.body} />
          ))}
        </RadioCards.Root>
      </Flex>

      <p className="text-center">
        Be it to get down to business, or have a coffee, I&apos;m happy to hear from you. If both of
        us see value in working together, we will move forward. If not, that&apos;s okay, our
        connection will be valuable.
      </p>

      <Flex justify="center" className="my-8">
        <a target="_blank">
          <Button size="3" variant="surface">
            <RocketIcon /> Get in touch
          </Button>
        </a>
      </Flex>
    </article>
  )
}
