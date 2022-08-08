import Redis from 'ioredis'

const redis = new Redis(process.env.NEXT_PUBLIC_RESIS_URL)

export default {redis}