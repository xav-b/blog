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
  title: "Xavier Bruhiere's blog",
  description: 'Xavier Bruhiere is an engineering leader and senior backend engineer at Binance',
  source: 'https://github.com/xav-b/blog',
  author: {
    name: 'Xavier Bruhiere',
    username: 'xav-b',
    twitter: 'XavierBruhiere',
    connect: 'https://www.linkedin.com/in/engineerxbruhiere/',
    email: 'xavier.bruhiere@gmail.com',
  },
  redis: {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  },
  development: {
    themePanel: false,
  },
}

export default config
