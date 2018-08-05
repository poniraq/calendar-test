import * as session from 'express-session';

export const SessionMiddleware = session({ secret: 'test_secret', resave: true, saveUninitialized: true })