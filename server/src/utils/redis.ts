import { createClient } from 'redis';
import * as config from 'config/redis';

export const RedisClient = createClient(
  config.port,
  config.host,
  { password: config.pass }
);

RedisClient.on('connect', () => console.log('Redis up and running'));
RedisClient.on('error', (err) => console.error(err));