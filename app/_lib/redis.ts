import { Redis } from '@upstash/redis'
import { randomInt } from './utils'
import config from '@/app/config'

const fakeRedis = {
  hincrby: async (key: string, id: string, incr: number) => incr + randomInt(0, 10000),
  hget: async (key: string, id: string) => randomInt(0, 10000),
  hgetall: async (key: string) => ({
    somePage: randomInt(0, 100000).toString(),
  }),
  set: async (key: string, data: any) => null,
  get: async (key: string) => null,
}

function initRedis() {
  if (!config.redis?.token || !config.redis?.url) {
    console.error('invalid redis config - client will be mocked')
    return fakeRedis
  }
  return new Redis(config.redis)
}

export default initRedis()
