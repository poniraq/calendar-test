import { User } from 'models';
import * as passport from 'passport';
import * as refresh from 'passport-oauth2-refresh';
import { GoogleStrategy } from './google';


passport.use(GoogleStrategy);
refresh.use(GoogleStrategy);
passport.serializeUser(function(user: User, done: passport.DoneFunction) {
  const data: UserSerializationData = {
    id: user.id,
    email: user.email
  };  

  done(null, data);
});
passport.deserializeUser((obj: UserSerializationData, done: passport.DoneFunction) => {
  User
    .findById(obj.id)
    .then(user => done(null, user))
});

interface UserSerializationData {
  id: number | string;
  email: string;
};

export * from './google';
