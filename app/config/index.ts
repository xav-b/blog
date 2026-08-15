export function buildMailTo() {
  const lineBreak = '%0D%0A%0D%0A'
  const p = {
    email: 'xavier-bruhiere@protonmail.com',
    subject: "Let's explore working together",
    body: `Hey Xavier,${lineBreak}`,
  }

  return `mailto:${p.email}?subject=${p.subject}&body=${p.body}`
}

// too keep in sync with `global.css`
export const theme = {
  light: {
    bg: '#FCFCFC',
  },
  dark: {
    bg: '#1C1C1C',
  },
}

const config = {
  url: 'https://xavierbruhiere.com',
  title: 'Xavier Bruhiere - Blog',
  description: 'Software Engineering, Backends, Leadership, Markets',
  source: 'https://github.com/xav-b/blog',
  author: {
    name: 'Xavier Bruhiere',
    username: 'xav-b',
    twitter: 'XavierBruhiere',
    connect: 'https://www.linkedin.com/in/engineerxbruhiere/',
    // connect: buildMailTo(),
    email: 'xavier-bruhiere@protonmail.com',
  },
  redis: {
    // TODO: remove the `UPSTASH` part, the service used should not dictate the
    // settings name
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  },
  development: {
    // show radix-ui theme panel
    // this is not exposed as a dynamic thing as I expect the panel to be useful as
    // a one-shot thing, e.g. at the beginning of the project when figuring out the
    // look and feel
    themePanel: false,
  },
}

export default config
