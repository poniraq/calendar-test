import * as session from 'express-session';
// import * as ConnectRedis from 'connect-redis';
// import { RedisClient } from 'utils/redis';

// const RedisStore = ConnectRedis(session);

export const SessionMiddleware = session({
  // store: new RedisStore({
  //   client: RedisClient
  // }),
  secret: 'test_secret',
  name: 'session-cookie',
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  resave: true,
  saveUninitialized: true
})