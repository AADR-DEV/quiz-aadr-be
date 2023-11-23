import { Redis } from '@upstash/redis';
import { REDIS_TOKEN, REDIS_URL } from '../config/environments';

const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});

export const createRedisKey = (username: string) => {
  return `${username.toUpperCase()}_CURRENT_DIAMONDS`;
};

export default redis;
