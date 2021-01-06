import Redis from "ioredis";
import { RedisPubSub } from "graphql-redis-subscriptions";

export const redis = new Redis(process.env.REDIS_URL);

export const redisPubsub = new RedisPubSub({
  publisher: redis,
  subscriber: redis,
});
