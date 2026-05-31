import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisUrl = process.env.UPSTASH_REDIS_URL;
let redis = null;

if (redisUrl) {
  redis = createClient({
    url: redisUrl,
    socket: {
      connectTimeout: 5000,
      reconnectStrategy: () => false,
    },
  });

  redis.on("error", (err) => console.error("Redis error:", err));

  try {
    await redis.connect();
    console.log("Redis connected");
  } catch (error) {
    console.warn(
      "Redis unavailable. Continuing without cache/token store:",
      error.message,
    );
    redis = null;
  }
} else {
  console.warn("UPSTASH_REDIS_URL is missing. Running without Redis.");
}

export { redis };

export const isRedisAvailable = () => Boolean(redis && redis.isOpen);

export const redisGet = async (key) => {
  if (!isRedisAvailable()) return null;
  try {
    return await redis.get(key);
  } catch {
    return null;
  }
};

export const redisSet = async (key, value, ...args) => {
  if (!isRedisAvailable()) return null;
  try {
    return await redis.set(key, value, ...args);
  } catch {
    return null;
  }
};

export const redisDel = async (key) => {
  if (!isRedisAvailable()) return 0;
  try {
    return await redis.del(key);
  } catch {
    return 0;
  }
};

export default redis;
