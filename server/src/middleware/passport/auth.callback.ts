import { Profile, DoneFunction, AuthCallback } from 'passport';
import { User } from 'models';


export function AuthCallback(provider: string): AuthCallback {
  return function(accessToken: string, refreshToken: string, profile: Profile, done: DoneFunction) {
    User
      .findOrBuild({
        where: { email: profile.emails[0].value },
        defaults: { provider: provider }
      })
      .then(([user]) => {
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        return user.save();
      })
      .then(user => { done(null, user) })
  }
}