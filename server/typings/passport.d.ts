import * as passport from 'passport';

declare module 'passport' {
  export type DoneFunction = (err: Error, data: any) => void;
  export type AuthCallback = (accessToken: string, refreshToken: string, profile: Profile, done?: DoneFunction) => void;
}