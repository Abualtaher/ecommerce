import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Upstash requires TLS
export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {},
});

redis.on("connect", () => console.log("Redis connected"));
redis.on("error", (err) => console.error("Redis error:", err));
