declare module 'passport-oauth2-refresh' {
  import { Strategy, DoneFunction } from 'passport';

  function use(strategy: Strategy): void;
  function requestNewAccessToken(provider: string, token: string, done: (err: any, newToken: string) => void): void;
}