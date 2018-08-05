declare module 'passport-google-oauth20' {
  import { Strategy as IStrategy, Profile, AuthCallback } from 'passport';

  export class Strategy extends IStrategy {
    constructor(config: GoogleOptions, callback: AuthCallback)
  }

  export interface GoogleOptions {
    clientID: string,
    clientSecret: string,
    callbackURL: string
  }
}