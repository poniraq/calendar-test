import { web as GoogleConfig } from 'config/google_creds';
import { Strategy, GoogleOptions } from 'passport-google-oauth20';
import { AuthCallback } from '../auth.callback';


const options: GoogleOptions = {
  clientID: GoogleConfig.client_id,
  clientSecret: GoogleConfig.client_secret,
  callbackURL: GoogleConfig.redirect_uris[0]
};

export const GoogleStrategy = new Strategy(options, AuthCallback('google'));